import Column from "components/Column";
import {useDragAndDrop} from "contexts/DragAndDropContext";


const ColumnList = () => {
    const {columns} = useDragAndDrop()

    return (
        <>
            {columns?.map((column, index) => (
                <Column key={column?.id} column={column} columnIndex={index} />
            ))}
        </>
    )
}

export default ColumnList;