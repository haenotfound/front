import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import {
	useReactTable,
	getCoreRowModel,
	getFilteredRowModel,
	getPaginationRowModel,
	getSortedRowModel,
	flexRender,
} from "@tanstack/react-table";
import S from "./style";
import SelectionFAB from "./SelectionFAB";

export const getSelectColumn = () => ({
	id: "select",
	header: ({ table }) => (
		<S.Checkbox
			type="checkbox"
			checked={table.getIsAllRowsSelected()}
			onChange={table.getToggleAllRowsSelectedHandler()}
		/>
	),
	cell: ({ row }) => (
		<S.Checkbox
			type="checkbox"
			checked={row.getIsSelected()}
			disabled={!row.getCanSelect()}
			onChange={row.getToggleSelectedHandler()}
		/>
	),
});

export const DetailButton = ({ onClick, children = ">" }) => (
	<S.DetailButton type="button" onClick={onClick}>
		<span>{children}</span>
	</S.DetailButton>
);

// 사용 예시:
// <BaseTable
//   data={users}
//   columns={columns}
//   enableRowSelection={true}
//   selectionActions={[
//     { value: "delete", label: "삭제", icon: "" },
//     { value: "hide", label: "숨김", icon: "" },
//   ]}
//   onSelectionAction={(action) => console.log(action)}
//   enableSorting={true}
//   enableFiltering={true}
//   enablePagination={true}
//   pageSize={10}
//   onRowSelectionChange={(selectedRows) => console.log(selectedRows)}
// />
const BaseTable = ({
	data = [],
	columns = [],
	enableRowSelection = false,
	selectionActions,
	onSelectionAction,
	enableSorting = true,
	enableFiltering = true,
	enablePagination = true,
	pageSize = 10,
	onRowSelectionChange,
	globalFilter = "",
	onGlobalFilterChange,
}) => {
	const [sorting, setSorting] = useState([]);
	const [rowSelection, setRowSelection] = useState({});
	const [internalGlobalFilter, setInternalGlobalFilter] = useState("");

	// Runtime validation for enableRowSelection + selectionActions
	useEffect(() => {
		if (enableRowSelection) {
			if (!selectionActions || selectionActions.length === 0) {
				console.warn(
					"[BaseTable] enableRowSelection is true but selectionActions is not provided. " +
						"Please provide selectionActions array when enabling row selection.",
				);
			}
			if (!onSelectionAction) {
				console.warn(
					"[BaseTable] enableRowSelection is true but onSelectionAction is not provided. " +
						"Please provide onSelectionAction callback when enabling row selection.",
				);
			}
		}
	}, [enableRowSelection, selectionActions, onSelectionAction]);

	const currentGlobalFilter = onGlobalFilterChange
		? globalFilter
		: internalGlobalFilter;
	const setCurrentGlobalFilter =
		onGlobalFilterChange || setInternalGlobalFilter;

	const table = useReactTable({
		data,
		columns,
		state: {
			sorting,
			rowSelection,
			...(enableFiltering && { globalFilter: currentGlobalFilter }),
		},
		enableRowSelection,
		onSortingChange: setSorting,
		onRowSelectionChange: setRowSelection,
		onGlobalFilterChange: enableFiltering ? setCurrentGlobalFilter : undefined,
		getCoreRowModel: getCoreRowModel(),
		getSortedRowModel: enableSorting ? getSortedRowModel() : undefined,
		getFilteredRowModel: enableFiltering ? getFilteredRowModel() : undefined,
		getPaginationRowModel: enablePagination
			? getPaginationRowModel()
			: undefined,
		initialState: {
			pagination: {
				pageSize,
			},
		},
	});

	useEffect(() => {
		if (onRowSelectionChange) {
			const selectedRows = table
				.getSelectedRowModel()
				.rows.map((row) => row.original);
			onRowSelectionChange(selectedRows);
		}
	}, [rowSelection, onRowSelectionChange, table]);

	const selectedCount = table.getSelectedRowModel().rows.length;

	return (
		<S.TableContainer>
			{enableFiltering && (
				<S.TableFilter>
					<input
						type="text"
						value={currentGlobalFilter}
						onChange={(e) => setCurrentGlobalFilter(e.target.value)}
						placeholder="검색..."
					/>
				</S.TableFilter>
			)}

			<S.Table>
				<S.TableHead>
					{table.getHeaderGroups().map((headerGroup) => (
						<tr key={headerGroup.id}>
							{headerGroup.headers.map((header) => (
								<th
									key={header.id}
									onClick={
										header.column.getCanSort()
											? header.column.getToggleSortingHandler()
											: undefined
									}
									className={header.column.getCanSort() ? "sortable" : ""}
								>
									{header.isPlaceholder
										? null
										: flexRender(
												header.column.columnDef.header,
												header.getContext(),
											)}
									{header.column.getIsSorted() && (
										<S.SortIndicator>
											{header.column.getIsSorted() === "asc" ? " ▲" : " ▼"}
										</S.SortIndicator>
									)}
								</th>
							))}
						</tr>
					))}
				</S.TableHead>
				<S.TableBody>
					{table.getRowModel().rows.length === 0 ? (
						<tr>
							<S.EmptyMessage colSpan={columns.length}>
								데이터가 없습니다.
							</S.EmptyMessage>
						</tr>
					) : (
						table.getRowModel().rows.map((row) => (
							<tr
								key={row.id}
								className={row.getIsSelected() ? "selected" : ""}
							>
								{row.getVisibleCells().map((cell) => (
									<td key={cell.id}>
										{flexRender(cell.column.columnDef.cell, cell.getContext())}
									</td>
								))}
							</tr>
						))
					)}
				</S.TableBody>
			</S.Table>

			{enablePagination && (
				<S.Pagination>
					<button
						onClick={() => table.setPageIndex(0)}
						disabled={!table.getCanPreviousPage()}
					>
						{"<<"}
					</button>
					<button
						onClick={() => table.previousPage()}
						disabled={!table.getCanPreviousPage()}
					>
						{"<"}
					</button>
					<S.PageInfo>
						{table.getState().pagination.pageIndex + 1} / {table.getPageCount()}
					</S.PageInfo>
					<button
						onClick={() => table.nextPage()}
						disabled={!table.getCanNextPage()}
					>
						{">"}
					</button>
					<button
						onClick={() => table.setPageIndex(table.getPageCount() - 1)}
						disabled={!table.getCanNextPage()}
					>
						{">>"}
					</button>
					<select
						value={table.getState().pagination.pageSize}
						onChange={(e) => table.setPageSize(Number(e.target.value))}
					>
						{[10, 20, 30, 50].map((size) => (
							<option key={size} value={size}>
								{size}개씩 보기
							</option>
						))}
					</select>
				</S.Pagination>
			)}

			{enableRowSelection && selectionActions && onSelectionAction && (
				<SelectionFAB
					selectedCount={selectedCount}
					actions={selectionActions}
					onAction={onSelectionAction}
				/>
			)}
		</S.TableContainer>
	);
};

BaseTable.propTypes = {
	data: PropTypes.array,
	columns: PropTypes.array,
	enableRowSelection: PropTypes.bool,
	selectionActions: PropTypes.arrayOf(
		PropTypes.shape({
			value: PropTypes.string.isRequired,
			label: PropTypes.string.isRequired,
			icon: PropTypes.string,
			variant: PropTypes.oneOf(["outline", "ghost", "solid"]),
			border: PropTypes.string,
			color: PropTypes.string,
			backgroundColor: PropTypes.string,
		}),
	),
	onSelectionAction: PropTypes.func,
	enableSorting: PropTypes.bool,
	enableFiltering: PropTypes.bool,
	enablePagination: PropTypes.bool,
	pageSize: PropTypes.number,
	onRowSelectionChange: PropTypes.func,
	globalFilter: PropTypes.string,
	onGlobalFilterChange: PropTypes.func,
};

export default BaseTable;
