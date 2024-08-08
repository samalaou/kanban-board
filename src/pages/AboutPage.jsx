function AboutPage() {
    return (
        <div className="AboutPage">
            <h1>About The Project</h1>
            <section className="project-overview">
                <h2>Project Overview</h2>
                <p>A Kanban Board app where the user can create, organize, and manage tasks through columns “To Do”, “In Progress”, and “Done”. </p>
            </section>
            <h2>Project Details</h2>
            <p><strong>Developer: </strong> Sam Alaoui <a href="https://github.com/samalaou" target="_blank">GitHub</a></p>
            <p><strong>Technologies Used: </strong> React</p>
            <p><strong>Contact Me: </strong> If you have any questions or feedback, please <a href="sam.mjalaoui@gmail.com">email me</a>.</p>
        </div>
    );
}

export default AboutPage;
