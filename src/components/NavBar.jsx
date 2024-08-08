import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

function NavBar() {
  return (
    <nav className="Navbar">
        <Link to="/" className="logo-link">
            <img src={logo} alt="Logo" className="Logo" />
        </Link>
        <span className="title">Kanban Board</span>
    </nav>
  );
}

export default NavBar;
