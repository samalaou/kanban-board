import List from "../components/List";

function HomePage(props) {
    return (
        <div className="HomePage">
            <List tasks={props.tasks} onClickDelete={props.onClickDelete} />
        </div>
    );
}

export default HomePage;
