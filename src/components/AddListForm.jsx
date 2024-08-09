function AddListForm(props) {
    return (
        <div className="AddList">
            <input
                type="text"
                id="newListName"
                value={props.value}
                onChange={props.onChange}
                placeholder="Enter list name"
            />
            <button onClick={props.handleAddList}>Add List</button>
            <button onClick={props.onClose}>Cancel</button>
        </div>
    );
}

export default AddListForm;
