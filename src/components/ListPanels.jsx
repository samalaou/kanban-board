import List from '../components/List';

function ListPanels(props) {
    return (
        <div className="ListPanel">
            {props.statusList.map(status => (
                <div key={status} className="ListContainer">
                    <h2>{status}</h2>
                    <List
                        tasks={props.tasksByStatus[status]}
                        onClickDelete={props.onClickDelete}
                    />
                    <button onClick={() => props.toggleFormVisibility('addTask', status)}>
                        Create New Task
                    </button>
                </div>
            ))}
        </div>
    );
}

export default ListPanels;
