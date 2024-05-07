import { DATA } from 'config';
import { IColumn } from 'types';

export interface IDragAndDropContext {
	columns: IColumn[];
	handleMoveColumn: (dragIndex: number, hoverIndex: number) => void;
	handleMoveRow: (dragIndex: number, hoverIndex: number, dragColumnIndex: number, hoverColumnIndex: number) => void;
}

export const initialState = {
	columns: DATA,
	handleMoveColumn: (dragIndex: number, hoverIndex: number) => null,
	handleMoveRow: (dragIndex: number, hoverIndex: number, dragColumnIndex: number, hoverColumnIndex: number) => null,
};
