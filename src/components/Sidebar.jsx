import { Link } from 'react-router-dom'
import "./Sidebar.css";

function Sidebar() {
  return (
    <div className="Sidebar">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
