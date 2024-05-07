import './Column.scss'
import {FC, useState} from "react";
import Row from "components/Row";
import DropZone from "components/DropZone";
import {ReactComponent as ArrowDownIcon} from 'assets/icons/arrowDown.svg'
import {ReactComponent as ArrowUpIcon} from 'assets/icons/arrowUp.svg'
import {useDrag} from "react-dnd";
import type { IColumn, IRow } from "types";
import type { ColumnDragItem, ColumnDropZone } from "types";
import {useDragAndDrop} from "../../contexts/DragAndDropContext";

type Props = {
    column: IColumn
    columnIndex: number
    defaultIsShowRows?: boolean
}

const Column:FC<Props> = ({column, columnIndex, defaultIsShowRows = false}) => {
    const {handleMoveColumn} = useDragAndDrop()
    const [isShowRows, setIsShowRows] = useState<boolean>(defaultIsShowRows)

    const [{ isDragging }, drag] = useDrag(() => ({
        type: 'column',
        item: { columnIndex,  isShowRows},
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    }), [columnIndex, isShowRows]);

    const toggleShowRows = () => setIsShowRows(prev => !prev)

    const handleDrop = (dragItem: ColumnDragItem, dropZone: ColumnDropZone): void => {
        handleMoveColumn(dragItem.columnIndex, dropZone.columnIndex)
    }

    const handleCanDrop = (dragItem: ColumnDragItem, dropZone: ColumnDropZone): boolean => dragItem?.columnIndex !== dropZone?.columnIndex

    return (
        <div
            className={`column ${isDragging ? 'column_dragging' : ''}`}
            ref={drag}
            draggable
        >
            <DropZone accept='column' dropZoneData={{...column, columnIndex}} onDrop={handleDrop} handleCanDrop={handleCanDrop}>
                <div className='column_content'>
                    <div className='column_content_header'>
                        <div className='column_content_header_info'>
                            <p>{column?.title}</p>
                            <div className='column_content_header_info_rows_length'>{column?.rows?.length}</div>
                        </div>
                        <div className='column_content_header_icons' onClick={toggleShowRows}>
                            {isShowRows ? <ArrowUpIcon/> : <ArrowDownIcon/>}
                        </div>
                    </div>
                    {isShowRows && (
                        <div>
                            {column?.rows?.length > 0 ? column?.rows?.map((row: IRow, index: number) =>
                                <Row key={row?.id} row={row} rowIndex={index} columnIndex={columnIndex} />) : (
                                <Row row={null} rowIndex={0} columnIndex={columnIndex} />
                            )}
                        </div>
                    )}
                </div>
            </DropZone>
        </div>
    )
}

export default Column