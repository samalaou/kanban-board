import { Link } from 'react-router-dom';

function ListCard(props) {
    return (
        <div className="ListCard">
            <h3>{props.task.title}</h3>
            <p><strong>Priority:</strong> {props.task.priority}</p>
            <p><strong>Assigned to:</strong> {props.task.assignee}</p>
            <div className='button-container'>
                <button onClick={props.onClickDelete}>Delete</button>
                <Link to={`/task/${props.task.id}`}>View Details</Link>
            </div>

        </div>
    );
}

export default ListCard;
