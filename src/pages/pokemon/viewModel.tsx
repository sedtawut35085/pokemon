import { useEffect, useState } from "react";
import { usePokemonContext } from "./context";
import { useQuery } from "@tanstack/react-query";
import {
  servicePokemonGetData,
  servicePokemonGetDetail,
  servicePokemonGetType,
  servicePokemonSelectType,
  servicePokemonSearch,
} from "@/service/pokemon";
import { useForm } from "react-hook-form";
import { IPagination } from "@/types/pagination";
import { PaginationState, Updater } from "@tanstack/react-table";
import { IPokemonType, IPokemonData } from "@/service/pokemon/types";
import { formatTableNumber } from "@/util/formatNumber";

const ViewModel = () => {
  const [pagination, setPagination] = useState<IPagination>({
    pageIndex: 0,
    pageSize: 10,
  });
  const [type, setType] = useState<IPokemonType>();
  const { usePokemonData, setPokemonData } = usePokemonContext();
  const { setValue, watch } = useForm({
    defaultValues: {
      totalRecord: 0,
      search: "",
      selectType: "all",
    },
  });
  const {
    refetch: dataRefetch,
    isLoading,
    isRefetching,
  } = useQuery({
    queryKey: [
      "servicePokemonGetData",
      pagination.pageIndex,
      pagination.pageSize,
    ],
    queryFn: async ({ signal }) => {
      const dataMap: IPokemonData[] = [];
      if (watch("search") != "") {
        console.log("call api search : ", watch("search"));
        const data = await servicePokemonSearch(watch("search"), signal);
        if (data.id === undefined) {
          setPokemonData(dataMap);
          setValue("totalRecord", 0);
          return data;
        }
        data.idFormat = formatTableNumber(data.id);
        const a: IPokemonData = {
          name: data.name,
          url: "",
          detail: data,
        };
        dataMap.push(a);
        setPokemonData(dataMap);
        setValue("totalRecord", dataMap.length);
        return data;
      } else if (watch("selectType") !== "" && watch("selectType") !== "all") {
        console.log("call api type : ", watch("selectType"));
        const data = await servicePokemonSelectType(
          watch("selectType"),
          signal
        );
        for (let index = 0; index < data.pokemon.length; index++) {
          const temp = await servicePokemonGetDetail(
            data.pokemon[index].pokemon.url,
            signal
          );
          temp.idFormat = formatTableNumber(temp.id);
          const a: IPokemonData = {
            name: data.pokemon[index].pokemon.name,
            url: data.pokemon[index].pokemon.url,
            detail: temp,
          };
          dataMap.push(a);
        }
        setPokemonData(dataMap);
        setValue("totalRecord", dataMap.length);
        return data;
      }
      const obj = {
        limit: pagination.pageSize,
        offset: pagination.pageSize * pagination.pageIndex,
      };
      console.log("call api");
      const data = await servicePokemonGetData(obj, signal);
      for (let index = 0; index < data.results.length; index++) {
        let temp = data.results[index].detail;
        temp = await servicePokemonGetDetail(data.results[index].url, signal);
        data.results[index].detail = temp;
        data.results[index].detail.idFormat = formatTableNumber(temp.id);
      }
      setPokemonData(data.results);
      setValue("totalRecord", data.count);
      return data;
    },
    refetchOnWindowFocus: false,
    // enabled: 
  });

  const { refetch: dataRefetchGetType } = useQuery({
    queryKey: ["servicePokemonGetType"],
    queryFn: async ({ signal }) => {
      const dataType = await servicePokemonGetType(signal);
      setType(dataType);
      return dataType;
    },
  });

  const handlePaginationChange = (updater: Updater<PaginationState>): void => {
    setPagination(updater);
  };

  useEffect(() => {
    setPagination({ pageIndex: 0, pageSize: 10 });
    dataRefetch();
    dataRefetchGetType();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [watch("search"), watch("selectType")]);

  return {
    pagination,
    setValue,
    watch,
    usePokemonData,
    isRefetching,
    isLoading,
    handlePaginationChange,
    type,
  };
};

export default ViewModel;
