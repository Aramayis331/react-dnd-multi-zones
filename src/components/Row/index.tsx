import { FC } from 'react';
import { useDrag } from 'react-dnd';
import { useDragAndDrop } from 'contexts/DragAndDropContext';
import DropZone from 'components/DropZone';
import type { IRow, RowDragItem, RowDropZone } from 'types';
import './Row.scss';

type Props = {
	row: IRow | null;
	rowIndex: number;
	columnIndex: number;
};

const Row: FC<Props> = ({ row, rowIndex, columnIndex }) => {
	const { handleMoveRow } = useDragAndDrop();

	const [{ isDragging }, drag] = useDrag(
		() => ({
			type: 'row',
			item: { rowIndex, columnIndex },
			collect: monitor => ({
				isDragging: monitor.isDragging(),
			}),
		}),
		[rowIndex, columnIndex],
	);

	const handleDrop = (dragItem: RowDragItem, dropZone: RowDropZone): void => {
		if (dragItem?.columnIndex === dropZone?.columnIndex) {
			handleMoveRow(dragItem.rowIndex, dropZone.rowIndex, dragItem.columnIndex, -1);
		} else {
			handleMoveRow(dragItem.rowIndex, dropZone.rowIndex, dragItem.columnIndex, dropZone.columnIndex);
		}
	};

	const handleCanDrop = (dragItem: RowDragItem, dropZone: RowDropZone): boolean =>
		!(dragItem?.columnIndex === dropZone?.columnIndex && dragItem?.rowIndex === dropZone?.rowIndex);

	return (
		<div
			className={`row ${isDragging ? 'row_dragging' : ''} ${row?.title ? '' : 'row_hide_border'}`}
			ref={row?.title ? drag : null}
			draggable
		>
			<DropZone
				accept='row'
				dropZoneData={{ ...row, rowIndex, columnIndex }}
				onDrop={handleDrop}
				handleCanDrop={handleCanDrop}
			>
				{row?.title && (
					<div className='row_content'>
						<p>{row?.title}</p>
					</div>
				)}
			</DropZone>
		</div>
	);
};

export default Row;
