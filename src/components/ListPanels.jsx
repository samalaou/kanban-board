import { DragDropContext, Droppable } from '@hello-pangea/dnd';
import List from '../components/List';

function ListPanels(props) {
  const onDragEnd = (result) => {
    const { source, destination } = result;

    if (!destination || destination.droppableId === 'all-lists') {
      return;
    }

    const sourceListId = source.droppableId;
    const destinationListId = destination.droppableId;
    const sourceTasks = [...props.tasksByStatus[sourceListId]];
    const [movedTask] = sourceTasks.splice(source.index, 1);

    if (sourceListId === destinationListId) {
      sourceTasks.splice(destination.index, 0, movedTask);
      sourceTasks.forEach((task, index) => {
        task.position = index;
      });
      sourceTasks.forEach(task => props.onUpdateTask(task));

    } else {
      props.onUpdateTask({
        ...movedTask,
        status: destinationListId,
      });
    }

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
              <div key={index} className="ListContainer">
                <Droppable  droppableId={status} direction="vertical">
                  {(provided) => (
                    <div
                      className="ListContainer"
                      ref={provided.innerRef}
                      {...provided.droppableProps}
                    >
                      <h2>{status}</h2>
                      <List
                        tasks={props.tasksByStatus[status] || []}
                        onClickDelete={props.onClickDelete}
                      />
                      {provided.placeholder}
                    </div>
                  )}
                </Droppable>
                <button onClick={() => props.toggleFormVisibility('addTask', status)}>
                  Create New Task
                </button>
              </div>

            ))}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
}

export default ListPanels;
