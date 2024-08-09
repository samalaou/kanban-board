import TaskForm from "../components/TaskForm";

function UpdateTaskPage(props) {

    const handleUpdateTask = (updatedTask) => {
        props.updateTask(updatedTask);
        props.onClose();
    };

    return (
        <TaskForm
            task={props.task}
            onSubmit={handleUpdateTask}
            onClose={props.onClose}
        />
    );
}

export default UpdateTaskPage;
