import { Link } from "react-router-dom";

const Nav_Bar = () => {
  return (
    <div className="Nav">
      <ul className="nav-menu">
        <li className="nav-item">
          <Link to="/" className="nav-link">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/about" className="nav-link">About</Link>
        </li>
        <li className="nav-item">
          <Link to="/signup" className="nav-link">SignUp</Link>
        </li>
        <li className="nav-item">
          <Link to="/login" className="nav-link">Login</Link>
        </li>
        <li className="nav-item">
          <Link to="/user/akash" className="nav-link">TestNotFound</Link>
        </li>
      </ul>
    </div>
  );
};

export default Nav_Bar;
