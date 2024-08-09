import { Link } from 'react-router-dom';

function ListCard(props) {
    return (
        <div className="Task">
            <h2>{props.task.title}</h2>
            <p><strong>Priority:</strong> {props.task.priority}</p>
            <p><strong>Assigned to:</strong> {props.task.assignee}</p>
            <button onClick={props.onClickDelete}>Delete</button>
            <Link to={`/task/${props.task.id}`}>View Details</Link>
        </div>
    );
}

export default ListCard;
