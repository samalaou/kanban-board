import List from "../components/List";
import AddTaskForm from "../components/AddTaskForm";
import { useState } from 'react';


function HomePage(props) {
    const [isFormVisible, setIsFormVisible] = useState(false);
    const [currentStatus, setCurrentStatus] = useState('');

    const toggleFormVisibility = (status) => {
        setCurrentStatus(status);
        setIsFormVisible(prev => !prev);
    };

    const handleAddTask = (newTask) => {
        props.createTask(newTask);
        setIsFormVisible(false);
        setCurrentStatus('');
    };

    const status = ['To Do', 'In Progress', 'Done']

    const tasksByStatus = status.reduce((acc, currentStatus) => {
        acc[currentStatus] = props.tasks.filter(task => task.status === currentStatus);
        return acc;
    }, {});

    return (
        <div className="HomePage">
            {isFormVisible && (
                <AddTaskForm
                    status={currentStatus}
                    createTask={handleAddTask}
                    onClose={toggleFormVisibility}
                />
            )}

            <div className="ListPanel">
                {status.map((currentStatus) => (
                        <div key={currentStatus} className="ListContainer">
                            <h2>{currentStatus}</h2>
                            <List
                                tasks={tasksByStatus[currentStatus]}
                                onClickDelete={props.onClickDelete}
                            />
                            <button onClick={() => toggleFormVisibility(currentStatus)}>
                                Create New Task
                            </button>
                        </div>
                    ))}
            </div>
        </div>
    );
}


export default HomePage;
