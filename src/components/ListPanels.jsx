import { DragDropContext, Droppable } from '@hello-pangea/dnd';
import List from '../components/List';

function ListPanels(props) {
  const onDragEnd = (result) => {
    const { source, destination } = result;

    if (!destination) {
      return;
    }
  
    const sourceTasks = props.tasksByStatus[source.droppableId];
    const [movedTask] = sourceTasks.filter((task) => task.id !== source.index);

    props.onUpdateTask({
      ...movedTask,
      status: destination.droppableId,
    });
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="all-lists" direction="horizontal">
        {(provided) => (
          <div
            className="ListPanel"
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {props.statusList.map((status, index) => (
              <Droppable key={index} droppableId={status} direction="vertical">
                {(provided) => (
                  <div
                    className="ListContainer"
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                  >
                    <h2>{status}</h2>
                    <List
                      tasks={props.tasksByStatus[status]}
                      onClickDelete={props.onClickDelete}
                    />
                    <button onClick={() => props.toggleFormVisibility('addTask', status)}>
                      Create New Task
                    </button>
                  </div>
                )}
              </Droppable>
            ))}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
}

export default ListPanels;
