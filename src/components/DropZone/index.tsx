import {FC, ReactNode} from "react";
import { useDrop } from 'react-dnd';
import './DropZone.scss'

type Props = {
    children: ReactNode
    accept: string | string[]
    dropZoneData: any
    onDrop: (dragItem: any, dropZone: any) => void
    handleCanDrop: (dragItem: any, dropZone: any) => boolean
}

const DropZone:FC<Props> = ({children, accept, dropZoneData, onDrop, handleCanDrop}) => {
    const [{ isOver, canDrop }, drop] = useDrop(() => ({
        accept,
        drop: async (dragItem) => {
            onDrop(dragItem, dropZoneData);
        },
        canDrop: (item) => handleCanDrop(dropZoneData, item),
        collect: (monitor) => ({
            isOver: monitor.isOver(),
            canDrop: monitor.canDrop(),
        }),
    }), [dropZoneData]);

    const isActive = isOver && canDrop;

    return (
        <div
            className={`drop_zone ${isActive ? 'drop_zone_active' : ''}`}
            ref={drop}
        >
            <div className='drop_zone_active_title'>Drop Here</div>
            {children}
        </div>
    )
}

export default DropZone;