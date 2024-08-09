import { useState } from "react";

function AddTaskForm(props) {
    const [task, setTask] = useState({
        title: "",
        description: "",
        assignee: "",
        status: "",
        priority: "",
        createdDate: "2023-09-16",
        dueDate: "2023-09-16"
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        props.createTask(task);
        props.onClose();
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setTask(prevTask => ({
            ...prevTask,
            [name]: value
        }));
    };

    return (
        <div className="formContainer">
            <div className="AddTaskForm">
            <h2>Create a New Task</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Title:
                    <input
                        type="text"
                        name="title"
                        required
                        placeholder="Enter task title"
                        value={task.title}
                        onChange={handleChange}
                    />
                </label>

                <label>
                    Description:
                    <input
                        type="text"
                        name="description"
                        placeholder="Enter task description"
                        value={task.description}
                        onChange={handleChange}
                    />
                </label>

                <label>
                    Assignee:
                    <input
                        type="text"
                        name="assignee"
                        placeholder="Enter assignee's name"
                        value={task.assignee}
                        onChange={handleChange}
                    />
                </label>

                <label>
                    Status:
                    <select name="status" value={task.status} onChange={handleChange}>
                        <option value="">-- Select Status --</option>
                        <option value="To Do">To Do</option>
                        <option value="In Progress">In Progress</option>
                        <option value="Done">Done</option>
                    </select>
                </label>

                <label>
                    Priority:
                    <select name="priority" value={task.priority} onChange={handleChange}>
                        <option value="">-- Select Priority --</option>
                        <option value="High">High</option>
                        <option value="Medium">Medium</option>
                        <option value="Low">Low</option>
                    </select>
                </label>

                <label>
                    Created Date:
                    <input
                        type="date"
                        name="createdDate"
                        value={task.createdDate}
                        onChange={handleChange}
                    />
                </label>

                <label>
                    Due Date:
                    <input
                        type="date"
                        name="dueDate"
                        value={task.dueDate}
                        onChange={handleChange}
                    />
                </label>
                <div className="button-container">
                        <button type="submit">Create Task</button>
                        <button type="button" onClick={props.onClose}>Cancel</button>
                </div>
            </form>
        </div>
        </div>
        
    );
}

export default AddTaskForm;
