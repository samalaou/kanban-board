import { useParams, Link } from 'react-router-dom';

function TaskDetailsPage(props) {
    const { id } = useParams();
    const task = props.tasks.find(t => t.id === id);

    return (
        <div className="TaskDetails">
            {task ? (
                <>
                    <h2>{task.title}</h2>
                    <p>{task.description}</p>
                    <p><strong>Status:</strong> {task.status}</p>
                    <p><strong>Priority:</strong> {task.priority}</p>
                    <p><strong>Assigned to:</strong> {task.assignee}</p>
                    <p><strong>Due Date:</strong> {task.dueDate}</p>  
                    <p><strong>Created on:</strong> {task.createdDate}</p>  
                    <Link to="/">Back</Link>
                </>
            ) : (
                <p>Task not found</p>
            )}
        </div>
    );
}

export default TaskDetailsPage;