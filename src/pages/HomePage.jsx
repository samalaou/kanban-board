import List from "../components/List";
import AddTaskForm from "../components/AddTaskForm";
import AddListForm from "../components/AddListForm";
import { useState } from 'react';

function HomePage(props) {
    const [formType, setFormType] = useState(null);
    const [currentStatus, setCurrentStatus] = useState('');
    const [statusList, setStatusList] = useState(['To Do', 'In Progress', 'Done']);
    const [newListName, setNewListName] = useState('');

    const toggleFormVisibility = (type, status = '') => {
        if (formType === type) {
            setFormType(null);
        } else {
            setFormType(type);
            setCurrentStatus(status);
        }
    };

    const handleAddTask = (newTask) => {
        props.createTask({ ...newTask, status: currentStatus });
        setFormType(null);
        setCurrentStatus('');
    };

    const handleAddList = () => {
        // the new list is lost if we change pages and I should move this state to App
        // to make it work. But I think this is this component responsability
        // and if i had an IPA I would put the request here.
        // that's why im leaving the code as is it right now
        setStatusList(prevStatusList => [...prevStatusList, newListName.trim()]);
        setNewListName('');
        setFormType(null);
    };

    const handleNewListNameChange = (event) => {
        setNewListName(event.target.value);
    };

    const tasksByStatus = statusList.reduce((acc, status) => {
        acc[status] = props.tasks.filter(task => task.status === status);
        return acc;
    }, {});

    return (
        <div className="HomePage">
            {formType === 'addTask' && (
                <AddTaskForm
                    createTask={handleAddTask}
                    onClose={() => setFormType(null)}
                />
            )}

            {formType === 'addList'? (
                <AddListForm
                value={newListName}
                onChange={handleNewListNameChange}
                handleAddList={handleAddList}
                onClose={() => setFormType(null)}
                />
            ) : (
                <button onClick={() => toggleFormVisibility('addList')}>
                    Create New List
                </button>
            )}

            <div className="ListPanel">
                {statusList.map(status => (
                    <div key={status} className="ListContainer">
                        <h2>{status}</h2>
                        <List
                            tasks={tasksByStatus[status]}
                            onClickDelete={props.onClickDelete}
                        />
                        <button onClick={() => toggleFormVisibility('addTask', status)}>
                            Create New Task
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default HomePage;
