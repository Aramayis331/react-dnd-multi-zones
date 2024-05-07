import { DndProvider } from 'react-dnd-multi-backend';
import ColumnList from './components/ColumnList';
import PreviewDragging from './components/PreviewDragging';
import { HTML5toTouch } from './config';
import { DragAndDropProvider } from './contexts/DragAndDropContext';

const App = () => (
	<DragAndDropProvider>
		<DndProvider options={HTML5toTouch}>
			<PreviewDragging />
			<ColumnList />
		</DndProvider>
	</DragAndDropProvider>
);

export default App;
