import { Link } from 'react-router-dom';

function ListCard(props) {
    const isDone = props.task.status.toLowerCase() === 'done';

    return (
        <div className="Task">
            <h2>{props.task.title}</h2>
            <p><strong>Status:</strong> {props.task.status} {isDone && <span role="img" aria-label="checkmark"> ✔️</span>}</p>
            <p><strong>Priority:</strong> {props.task.priority}</p>
            <p><strong>Assigned to:</strong> {props.task.assignee}</p>
            <button onClick={props.onClickDelete}>Delete</button>
            <Link to={`/task/${props.task.id}`}>View Details</Link>
        </div>
    );
}

export default ListCard;
