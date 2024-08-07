import tasksList from "../assets/kanban.json";
import { useState } from "react";
import ListCard from "./ListCard";


function List() {
    const [tasks, setTasks] = useState(tasksList);

    const handleOnClickBtn = (id) => {
        const updatedTasks = tasks.filter(task => task.id !== id);
        setTasks(updatedTasks);
    };

    return (
        <div className="TaskList">
            {tasks.map(task => (
                <ListCard
                    key={task.id}
                    title={task.title}
                    description={task.description}
                    assignee={task.assignee}
                    status={task.status}
                    dueDate={task.dueDate}
                    priority={task.priority}
                    onClickDelete={() => handleOnClickBtn(task.id)}
                />
            ))}
        </div>
    );
}

export default List;
