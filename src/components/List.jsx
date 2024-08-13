import { Draggable } from '@hello-pangea/dnd';
import ListCard from "./ListCard";

function List(props) {
  return (
    <div className="TaskList">
      {props.tasks.map((task, index) => (
        <Draggable key={task.id} draggableId={`task${task.id.toString()}`} index={index}>
          {(provided) => (
            <div
              ref={provided.innerRef}
              {...provided.draggableProps}
              {...provided.dragHandleProps}
            >
              <ListCard
                task={task}
                onClickDelete={() => props.onClickDelete(task.id)}
              />
            </div>
          )}
        </Draggable>
      ))}
    </div>
  );
}

export default List;
