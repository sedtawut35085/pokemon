import { flexRender, Table } from "@tanstack/react-table";
import Pagination from "@/components/pages/Pagination/view";
import SortUp from "@/assets/SortUp.svg";
import SortDown from "@/assets/SortDown.svg";
import DefaultSort from "@/assets/DefaultSort.svg";

import styled from "styled-components";
import ViewModel from "./viewModel";
interface ITableProps {
  table: Table<any>;
  isLoading: boolean;
  isPagination: boolean;
  total: number;
}

const View = ({
  table,
  isLoading = false,
  total,
  isPagination,
}: ITableProps) => {
  const { handleNavigateToDetail } = ViewModel();
  return (
    <div className="flex justify-center"
    >
      <BoxDecoration className="overflow-x-auto">
        <table>
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th
                    key={header.id}
                    onClick={header.column.getToggleSortingHandler()}
                  >
                    {header.isPlaceholder ? null : (
                      <div className="flex flex-row justify-between">
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                        {header.column.getCanSort()
                          ? {
                              asc: (
                                <img
                                  className="cursor-pointer"
                                  src={SortDown}
                                  alt="SortDown"
                                  width={18}
                                  height={18}
                                />
                              ),
                              desc: (
                                <img
                                  className="cursor-pointer"
                                  src={SortUp}
                                  alt="SortUp"
                                  width={18}
                                  height={18}
                                />
                              ),
                            }[header.column.getIsSorted() as string] ?? (
                              <img
                                className="cursor-pointer"
                                src={DefaultSort}
                                alt="DefaultSort"
                                width={18}
                                height={18}
                              />
                            )
                          : null}
                      </div>
                    )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {!isLoading &&
              table.getRowModel().rows.map((row) => {
                return (
                  <tr
                    key={row.id}
                    className="border-b-[1px] border-gray"
                    onClick={() =>
                      handleNavigateToDetail(row.original.detail.id)
                    }
                  >
                    {row.getVisibleCells().map((cell) => {
                      return (
                        <td key={cell.id}>
                          {flexRender(
                            cell.column.columnDef.cell,
                            cell.getContext()
                          )}
                        </td>
                      );
                    })}
                  </tr>
                );
              })}
          </tbody>
        </table>
        {isLoading && <div>Loading..</div>}
        {!isLoading && total == 0 && <div>Data Not Found</div>}
        {isPagination && <Pagination table={table} total={total}></Pagination>}
      </BoxDecoration>
    </div>
  );
};

const BoxDecoration = styled.div`
  th {
    min-width: 100px;
    height: 50px;
    color: black;
    background-color: beige;
    position: relative;
    text-align: center;
    white-space: nowrap;
    flex: 1;
  }

  th:nth-child(1) {
    width: 150px;
    min-width: 150px;
    flex: 1;
    text-align: left;
    padding-left: 20px;
  }

  th:nth-child(2) {
    width: 150px;
    min-width: 150px;
    flex: 1;
    text-align: left;
    padding-left: 10px;
  }
  th:nth-child(3) {
    width: 100px;
    min-width: 100px;
    flex: 1;
    text-align: left;
    padding-left: 10px;
  }
  th:nth-child(4) {
    width: 75px;
    min-width: 75px;
    flex: 1;
    text-align: left;
    padding-left: 10px;
  }
  th:nth-child(5) {
    width: 100px;
    min-width: 100px;
    flex: 1;
    text-align: left;
    padding-left: 10px;
  }
  th:nth-child(6) {
    width: 100px;
    min-width: 100px;
    flex: 1;
    text-align: left;
    padding-left: 10px;
  }
  th:nth-child(7) {
    width: 100px;
    min-width: 100px;
    flex: 1;
    text-align: left;
    padding-left: 10px;
  }
  th:nth-child(8) {
    width: 100px;
    min-width: 100px;
    flex: 1;
    text-align: left;
    padding-left: 10px;
  }
  th:nth-child(9) {
    width: 100px;
    min-width: 100px;
    flex: 1;
    text-align: left;
    padding-left: 10px;
  }
  td {
    min-width: 100px;
  }
  td:nth-child(2) {
    padding-left: 10px;
  }
  td:nth-child(4) {
    text-align: right;
    padding-right: 10px;
  }
  td:nth-child(5) {
    text-align: right;
    padding-right: 10px;
  }
  td:nth-child(6) {
    text-align: right;
    padding-right: 10px;
  }
  td:nth-child(7) {
    text-align: right;
    padding-right: 10px;
  }
  td:nth-child(8) {
    text-align: right;
    padding-right: 10px;
  }
  td:nth-child(9) {
    text-align: right;
    padding-right: 10px;
  }
`;
export default View;
