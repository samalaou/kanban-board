import { Link } from 'react-router-dom';

function ListCard(props) {
    return (
        <div className="ListCard">
            <Link to={`/task/${props.task.id}`}>
                <h3>{props.task.title}</h3>
                <p><strong>Priority:</strong> {props.task.priority}</p>
                <p><strong>Assigned to:</strong> {props.task.assignee}</p>
            </Link>

            <div className='button-container'>
                <button onClick={props.onClickDelete}>Delete</button>
            </div>
        </div>
    );
}

export default ListCard;
