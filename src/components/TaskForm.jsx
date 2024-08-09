import { useState } from "react";

function TaskForm(props) {
    const [formData, setFormData] = useState(props.task);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        props.onSubmit(formData);
        props.onClose();
    };

    return (
        <div className="formContainer">
            <div className="AddTaskForm">
                <h2>{props.task.id ? "Update task" : "Create a new task"}</h2>
                <form onSubmit={handleFormSubmit}>
                    <label>
                        Title:
                        <input
                            type="text"
                            name="title"
                            required
                            placeholder="Enter task title"
                            value={formData.title}
                            onChange={handleChange}
                        />
                    </label>

                    <label>
                        Description:
                        <input
                            type="text"
                            name="description"
                            placeholder="Enter task description"
                            value={formData.description}
                            onChange={handleChange}
                        />
                    </label>

                    <label>
                        Assignee:
                        <input
                            type="text"
                            name="assignee"
                            placeholder="Enter assignee's name"
                            value={formData.assignee}
                            onChange={handleChange}
                        />
                    </label>

                    <label>
                        Status:
                        <select name="status" value={formData.status} onChange={handleChange}>
                            <option value="">-- Select Status --</option>
                            <option value="To Do">To Do</option>
                            <option value="In Progress">In Progress</option>
                            <option value="Done">Done</option>
                        </select>
                    </label>

                    <label>
                        Priority:
                        <select name="priority" value={formData.priority} onChange={handleChange}>
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
                            value={formData.createdDate}
                            onChange={handleChange}
                        />
                    </label>

                    <label>
                        Due Date:
                        <input
                            type="date"
                            name="dueDate"
                            value={formData.dueDate}
                            onChange={handleChange}
                        />
                    </label>

                    <div className="button-container">
                        <button type="button" onClick={props.onClose}>Cancel</button>
                        <button type="submit">{props.task.id ? "Update Task" : "Create Task"}</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default TaskForm;
