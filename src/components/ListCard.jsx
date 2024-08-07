function ListCard(props) {
    const isDone = props.status.toLowerCase() === 'done';

    return (
        <div className="Task">
            <h2>{props.title}</h2>
            <p>{props.description}</p>
            <p><strong>Status:</strong> {props.status} {isDone && <span role="img" aria-label="checkmark"> ✔️</span>}</p>
            <p><strong>Status:</strong> {props.status}</p>
            <p><strong>Priority:</strong> {props.priority}</p>
            <p><strong>Assigned to:</strong> {props.assignee}</p>
            <p><strong>Due Date:</strong> {props.dueDate}</p>
            <button onClick={props.onClickDelete}>Delete</button>
        </div>
    );
}

export default ListCard;
