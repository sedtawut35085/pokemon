import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { servicePokemonSearch } from "@/service/pokemon/index";
import { useEffect, useState } from "react";
import { IPokemonDetail } from "@/service/pokemon/types";

const ViewModel = () => {
  const param = useParams();
  const id = param.id;
  const [data, setData] = useState<IPokemonDetail>();
  const { refetch: dataRefetch, isRefetching } = useQuery({
    queryKey: ["servicePokemonGetType"],
    queryFn: async ({ signal }) => {
      const res = await servicePokemonSearch(id || "", signal);
      setData(res);
      console.log(res);
      return res;
    },
  });
  useEffect(() => {
    dataRefetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { data, isRefetching };
};

export default ViewModel;
