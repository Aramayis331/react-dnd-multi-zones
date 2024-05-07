import { HTML5Backend } from 'react-dnd-html5-backend'
import { TouchBackend } from 'react-dnd-touch-backend'
import { DndProvider, TouchTransition, MouseTransition } from 'react-dnd-multi-backend'
import PreviewDragging from "./components/PreviewDragging";
import {DragAndDropProvider} from "./contexts/DragAndDropContext";
import ColumnList from "./components/ColumnList";


export const HTML5toTouch = {
  backends: [
    {
      id: 'html5',
      backend: HTML5Backend,
      transition: MouseTransition,
    },
    {
      id: 'touch',
      backend: TouchBackend,
      options: {enableMouseEvents: true},
      preview: true,
      transition: TouchTransition,
    },
  ],
}

const App = () => (
    <DragAndDropProvider>
      <DndProvider options={HTML5toTouch}>
        <PreviewDragging />
        <ColumnList />
      </DndProvider>
    </DragAndDropProvider>

);

export default App;
