export interface IRow {
	id: string;
	title: string;
}

export type IColumn = {
	id: string;
	title: string;
	rows: IRow[];
};

export type ColumnDragItem = { columnIndex: number; isShowRows: boolean };
export type ColumnDropZone = IColumn & ColumnDragItem;
export type RowDragItem = { rowIndex: number; columnIndex: number };
export type RowDropZone = IRow & RowDragItem;
