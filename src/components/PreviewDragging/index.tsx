import { usePreview } from 'react-dnd-multi-backend';
import './PreviewDragging.scss'
import { FC } from "react";
import Column from "components/Column";
import Row from "components/Row";
import {useDragAndDrop} from "contexts/DragAndDropContext";

const PreviewDragging:FC = () => {
    const preview = usePreview<{columnIndex: number; rowIndex: number; isShowRows?: boolean}>();
    const {columns} = useDragAndDrop()

    if (!preview.display) return null;

    const { item, style } = preview;

    return (
        <div className={`preview_dragging ${item?.rowIndex >= 0 ? 'preview_dragging_row' : ''}`} style={style}>
            {item?.rowIndex >= 0 ? <Row row={columns[item?.columnIndex].rows[item.rowIndex]} rowIndex={item.rowIndex} columnIndex={item.columnIndex} /> :
                <Column column={columns[item.columnIndex]} columnIndex={item.columnIndex} defaultIsShowRows={item?.isShowRows} />}
        </div>
    )
}

export default PreviewDragging;