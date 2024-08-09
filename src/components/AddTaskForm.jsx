import TaskForm from "../components/TaskForm";

function AddTaskForm(props) {
    const task = {
        title: "",
        description: "",
        assignee: "",
        status: "",
        priority: "",
        createdDate: "2023-09-16",
        dueDate: "2023-09-16"
    };

    const handleSubmit = (task) => {
        props.createTask(task);
        props.onClose();
    };

    return (
        <TaskForm
            task={task}
            onSubmit={handleSubmit}
            onClose={props.onClose}
        />
    );
}

export default AddTaskForm;
