import List from "../components/List";
import AddTaskForm from "../components/AddTaskForm";
import { useState } from 'react';


function HomePage(props) {
    const [isFormVisible, setIsFormVisible] = useState(false);

    const toggleFormVisibility = () => {
        setIsFormVisible(prev => !prev);
    };

    const handleAddTask = (newTask) => {
        props.createTask(newTask);
        setIsFormVisible(false);
    };

    const status = ['To Do', 'In Progress', 'Done']

    const tasksByStatus = status.reduce((acc, currentStatus) => {
        acc[currentStatus] = props.tasks.filter(task => task.status === currentStatus);
        return acc;
    }, {});

    return (
        <div className="HomePage">
            <button onClick={toggleFormVisibility}>
                Create New Task
            </button>

            {isFormVisible && (
                <AddTaskForm
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
                        </div>
                    ))}
            </div>

            

        </div>
    );
}


export default HomePage;
