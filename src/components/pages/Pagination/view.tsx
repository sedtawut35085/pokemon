import { Table } from "@tanstack/react-table";

interface IPaginationProps {
  table: Table<any>;
  total: number;
}

const View = ({ table, total }: IPaginationProps) => {
  return (
    <div className="flex item-center gap-2 mt-4">
      <button
        className="border rounded p-1"
        onClick={() => {
          table.setPageIndex(0);
        }}
        disabled={table.getState().pagination.pageIndex == 0}
      >
        {"<<"}
      </button>
      <button
        className="border rounded p-1"
        onClick={() => {
          table.setPageIndex(table.getState().pagination.pageIndex - 1);
        }}
        disabled={table.getState().pagination.pageIndex == 0}
      >
        {"<"}
      </button>
      <button
        className="border rounded p-1"
        onClick={() => {
          table.setPageIndex(table.getState().pagination.pageIndex + 1);
        }}
        disabled={
          table.getState().pagination.pageIndex + 1 ==
          Math.ceil(total / table.getState().pagination.pageSize)
        }
      >
        {">"}
      </button>
      <button
        className="border rounded p-1"
        onClick={() => {
          table.setPageIndex(
            Math.floor(total / table.getState().pagination.pageSize)
          );
        }}
        disabled={
          table.getState().pagination.pageIndex + 1 ==
          Math.ceil(total / table.getState().pagination.pageSize)
        }
      >
        {">>"}
      </button>
      <span className="flex items-center gap-1">
        <div>Page</div>
        <strong>
          {table.getState().pagination.pageIndex + 1} of{" "}
          {Math.ceil(total / table.getState().pagination.pageSize)}
        </strong>
      </span>
      <span className="flex items-center gap-1">
        | Go to page:
        <input
          type="number"
          min="1"
          max={Math.ceil(total / table.getState().pagination.pageSize)}
          value={table.getState().pagination.pageIndex + 1}
          onChange={(e) => {
            const page = e.target.value ? Number(e.target.value) - 1 : 0;
            table.setPageIndex(page);
          }}
          className="border p-1 rounded w-16"
        />
      </span>
      <select
        value={table.getState().pagination.pageSize}
        onChange={(e) => {
          table.setPageSize(Number(e.target.value));
        }}
      >
        {[10, 20, 30, 40, 50].map((pageSize) => (
          <option key={pageSize} value={pageSize}>
            Show {pageSize}
          </option>
        ))}
      </select>
    </div>
  );
};

export default View;
