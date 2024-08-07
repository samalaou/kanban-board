import logo from "../assets/logo.png";

function NavBar() {
  return (
    <nav className="Navbar">
        <img src={logo} alt="Logo" className="Logo" />
        <span className="title">Kanban Board</span>
    </nav>
  );
}

export default NavBar;
