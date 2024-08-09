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

            <List tasks={props.tasks} onClickDelete={props.onClickDelete} />
        </div>
    );
}


export default HomePage;
