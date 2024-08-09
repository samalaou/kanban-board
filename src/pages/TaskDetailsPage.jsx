import { useParams, Link } from 'react-router-dom';
import { useState } from 'react';
import UpdateTaskForm from "../components/UpdateTaskForm";

function TaskDetailsPage(props) {
    const [isFormVisible, setIsFormVisible] = useState(false);

    const { id } = useParams();
    const task = props.tasks.find(t => t.id === id);

    const toggleFormVisibility = () => {
        setIsFormVisible(prev => !prev);
    };

    const updateTask = (newTask) => {
        props.updateTask(newTask);
        setIsFormVisible(false);
    };

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

                    <div className="button-container">
                        <Link to="/">Back</Link>
                        <button onClick={toggleFormVisibility}>
                            Update Task
                        </button>
                    </div>

                    {isFormVisible && (
                        <UpdateTaskForm
                            task={task} 
                            onClose={toggleFormVisibility}
                            updateTask={updateTask}
                        />
                    )}
                </>
            ) : (
                <p>Task not found</p>
            )}
        </div>
    );
}

export default TaskDetailsPage;