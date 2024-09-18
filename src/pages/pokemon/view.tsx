import ViewModel from "./viewModel";
import { typeBgColorClasses, typeTextColorClasses } from "./type";
import {
  createColumnHelper,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
  getSortedRowModel,
} from "@tanstack/react-table";
import { useMemo } from "react";
import { IPokemonData } from "@/service/pokemon/types";
import Table from "@/components/pages/Pokemon/table/view";
import { PokemonProvider } from "@/pages/pokemon/context";
import styled from "styled-components";
interface ITypeBoxProps {
  type: string;
}
const ViewWrapper = () => {
  return (
    <PokemonProvider>
      <View />
    </PokemonProvider>
  );
};

const View = () => {
  const {
    setValue,
    watch,
    usePokemonData,
    isRefetching,
    isLoading,
    pagination,
    handlePaginationChange,
    type,
  } = ViewModel();
  const columnHelper = createColumnHelper<IPokemonData>();
  const columns = useMemo(
    () => [
      columnHelper.accessor("detail", {
        id: `image`,
        header: () => (
          <div>
            <p>#</p>
          </div>
        ),
        cell: (info) => {
          return (
            <div className="flex">
              <img
                className="w-16 h-16"
                src={info.getValue().sprites.front_default}
                alt={info.getValue().sprites.front_default}
              />
              <div className="content-center pl-2">
                {info.getValue().idFormat}
              </div>
            </div>
          );
        },
        sortingFn: (rowA, rowB) => {
          const valRowA = rowA.original.detail.id;
          const valRowB = rowB.original.detail.id;
          return valRowA - valRowB;
        },
      }),
      columnHelper.accessor("name", {
        id: `name`,
        header: () => (
          <div>
            <p>Name</p>
          </div>
        ),
        cell: (info) => {
          return (
            <div>
              {info.getValue().charAt(0).toUpperCase() +
                info.getValue().slice(1)}
            </div>
          );
        },
        sortDescFirst: true,
      }),
      columnHelper.accessor("detail", {
        id: `type`,
        header: () => (
          <div>
            <p>Type</p>
          </div>
        ),
        cell: (info) => {
          return info.getValue().types.map((value, index) => {
            return (
              <BoxTypeDecoration type={value.type.name}>
                <div
                  key={index}
                  className="type-color border border-black-100 w-min p-1 m-1 rounded-md text-sm"
                >
                  {value.type.name.toUpperCase()}
                </div>
              </BoxTypeDecoration>
            );
          });
        },
        enableSorting: false,
      }),
      columnHelper.accessor("detail", {
        id: `hp`,
        header: () => (
          <div>
            <p>Hp</p>
          </div>
        ),
        cell: (info) => {
          const value = info
            .getValue()
            .stats.find((stats) => stats.stat.name === "hp");
          return <div>{value?.base_stat}</div>;
        },
        sortingFn: (rowA, rowB) => {
          const valRowA =
            rowA.original.detail.stats.find((stats) => stats.stat.name === "hp")
              ?.base_stat || 1;
          const valRowB =
            rowB.original.detail.stats.find((stats) => stats.stat.name === "hp")
              ?.base_stat || 1;
          return valRowA - valRowB;
        },
      }),
      columnHelper.accessor("detail", {
        id: `attack`,
        header: () => (
          <div>
            <p>Attack</p>
          </div>
        ),
        cell: (info) => {
          const value = info
            .getValue()
            .stats.find((stats) => stats.stat.name === "attack");
          return <div>{value?.base_stat}</div>;
        },
        sortingFn: (rowA, rowB) => {
          const valRowA =
            rowA.original.detail.stats.find(
              (stats) => stats.stat.name === "attack"
            )?.base_stat || 1;
          const valRowB =
            rowB.original.detail.stats.find(
              (stats) => stats.stat.name === "attack"
            )?.base_stat || 1;
          return valRowA - valRowB;
        },
      }),
      columnHelper.accessor("detail", {
        id: `defense`,
        header: () => (
          <div>
            <p>Defense</p>
          </div>
        ),
        cell: (info) => {
          const value = info
            .getValue()
            .stats.find((stats) => stats.stat.name === "defense");
          return <div>{value?.base_stat}</div>;
        },
        sortingFn: (rowA, rowB) => {
          const valRowA =
            rowA.original.detail.stats.find(
              (stats) => stats.stat.name === "defense"
            )?.base_stat || 1;
          const valRowB =
            rowB.original.detail.stats.find(
              (stats) => stats.stat.name === "defense"
            )?.base_stat || 1;
          return valRowA - valRowB;
        },
      }),
      columnHelper.accessor("detail", {
        id: `special-attack`,
        header: () => (
          <div>
            <p>Sp. Atk</p>
          </div>
        ),
        cell: (info) => {
          const value = info
            .getValue()
            .stats.find((stats) => stats.stat.name === "special-attack");
          return <div>{value?.base_stat}</div>;
        },
        sortingFn: (rowA, rowB) => {
          const valRowA =
            rowA.original.detail.stats.find(
              (stats) => stats.stat.name === "special-attack"
            )?.base_stat || 1;
          const valRowB =
            rowB.original.detail.stats.find(
              (stats) => stats.stat.name === "special-attack"
            )?.base_stat || 1;
          return valRowA - valRowB;
        },
      }),
      columnHelper.accessor("detail", {
        id: `special-defense`,
        header: () => (
          <div>
            <p>Sp. Def</p>
          </div>
        ),
        cell: (info) => {
          const value = info
            .getValue()
            .stats.find((stats) => stats.stat.name === "special-defense");
          return <div>{value?.base_stat}</div>;
        },
        sortingFn: (rowA, rowB) => {
          const valRowA =
            rowA.original.detail.stats.find(
              (stats) => stats.stat.name === "special-defense"
            )?.base_stat || 1;
          const valRowB =
            rowB.original.detail.stats.find(
              (stats) => stats.stat.name === "special-defense"
            )?.base_stat || 1;
          return valRowA - valRowB;
        },
      }),
      columnHelper.accessor("detail", {
        id: `speed`,
        header: () => (
          <div>
            <p>Speed</p>
          </div>
        ),
        cell: (info) => {
          const value = info
            .getValue()
            .stats.find((stats) => stats.stat.name === "speed");
          return <div>{value?.base_stat}</div>;
        },
        sortingFn: (rowA, rowB) => {
          const valRowA =
            rowA.original.detail.stats.find(
              (stats) => stats.stat.name === "speed"
            )?.base_stat || 1;
          const valRowB =
            rowB.original.detail.stats.find(
              (stats) => stats.stat.name === "speed"
            )?.base_stat || 1;
          return valRowA - valRowB;
        },
      }),
    ],
    []
  );

  const table = useReactTable({
    data: usePokemonData,
    columns: columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onPaginationChange: (value) => {
      handlePaginationChange(value);
    },
    autoResetPageIndex: false,
    manualPagination: true,
    state: {
      pagination,
    },
    getSortedRowModel: getSortedRowModel(),
  });

  return (
    <div className="flex justify-center m-12">
      <div className="flex flex-col">
        <div className="flex flex-row justify-center">
          <div>Name:</div>
          <input
            className="border border-gray-200 rounded ml-2 pl-2 text-black text-[16px] placeholder-gray-400"
            placeholder="search"
            onChange={(e) => {
              setValue("search", e.target.value);
            }}
          />
          <div className="ml-2">Type:</div>
          <select
            defaultValue={"DEFAULT"}
            className="border border-gray-200 rounded ml-2 text-sm text-black text-[16px] pl-2"
            onChange={(e) => {
              setValue("selectType", e.target.value);
            }}
          >
            <option value="all">- all -</option>
            {type?.results != null &&
              type?.results.map((type, id) => (
                <option key={id} value={type.url}>
                  {type.name}
                </option>
              ))}
          </select>
        </div>
        <h1>Total : {watch("totalRecord")}</h1>
        <Table
          isLoading={isRefetching || isLoading}
          table={table}
          total={watch("totalRecord")}
          isPagination={watch("selectType") == "all"}
        ></Table>
      </div>
    </div>
  );
};

const BoxTypeDecoration = styled.div<ITypeBoxProps>`
  .type-color {
    background-color: ${(props) =>
      typeBgColorClasses[props.type as keyof typeof typeBgColorClasses] ||
      "white"};
    color: ${(props) =>
      typeTextColorClasses[props.type as keyof typeof typeTextColorClasses] ||
      "black"};
  }
`;

export default ViewWrapper;
