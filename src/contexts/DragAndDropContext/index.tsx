import { createContext, ReactNode, useContext, useState } from 'react';
import { DATA } from 'config';
import { IColumn } from 'types';
import { IDragAndDropContext, initialState } from './initialState';

const DragAndDropContext = createContext<IDragAndDropContext>(initialState);

export const useDragAndDrop = () => {
	const context = useContext(DragAndDropContext);

	if (!context) {
		throw new Error('useDragAndDrop must be used within a DragAndDropProvider');
	}

	return context;
};

export const DragAndDropProvider = ({ children }: { children: ReactNode }) => {
	const [columns, setColumns] = useState<IColumn[]>(DATA);

	const handleMoveColumn = (dragIndex: number, hoverIndex: number): void => {
		const newColumns = [...columns];
		const dragItem = newColumns[dragIndex];

		newColumns.splice(dragIndex, 1);
		newColumns.splice(hoverIndex, 0, dragItem);

		setColumns(newColumns);
	};

	const handleMoveRow = (
		dragIndex: number,
		hoverIndex: number,
		dragColumnIndex: number,
		hoverColumnIndex: number,
	): void => {
		const newColumns = [...columns];
		const dragBlockColumn = newColumns[dragColumnIndex];
		const hoverBlockColumn = newColumns[hoverColumnIndex];

		if (hoverColumnIndex >= 0) {
			const newDragRow = [...dragBlockColumn.rows];
			const newHoverRow = [...hoverBlockColumn.rows];

			const [removedItem] = newDragRow.splice(dragIndex, 1);
			newHoverRow.splice(hoverIndex, 0, removedItem);

			dragBlockColumn.rows = newDragRow;
			hoverBlockColumn.rows = newHoverRow;
		} else {
			const newDragRow = [...dragBlockColumn.rows];

			const [removedItem] = newDragRow.splice(dragIndex, 1);
			newDragRow.splice(hoverIndex, 0, removedItem);
			dragBlockColumn.rows = newDragRow;
		}

		setColumns(newColumns);
	};

	const values = {
		columns,
		handleMoveColumn,
		handleMoveRow,
	};

	return <DragAndDropContext.Provider value={values}>{children}</DragAndDropContext.Provider>;
};
