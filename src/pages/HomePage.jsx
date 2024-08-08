import List from "../components/List";

function HomePage(props) {
    return (
        <div>
            <List tasks={props.tasks} onClickDelete={props.onClickDelete} />
        </div>
    );
}

export default HomePage;
