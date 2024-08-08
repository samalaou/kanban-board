import ListCard from "./ListCard";

function List(props) {
    return (
        <div className="TaskList">
            {props.tasks.map(task => (
                <ListCard
                    key={task.id}
                    task={task}
                    onClickDelete={() => props.onClickDelete(task.id)}
                />
            ))}
        </div>
    );
}

export default List;
