import { useDragAndDrop } from 'contexts/DragAndDropContext';
import Column from 'components/Column';

const ColumnList = () => {
	const { columns } = useDragAndDrop();

	return <>{columns?.map((column, index) => <Column key={column?.id} column={column} columnIndex={index} />)}</>;
};

export default ColumnList;
