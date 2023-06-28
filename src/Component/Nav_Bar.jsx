import { Link } from "react-router-dom";

const Nav_Bar = () => {
  return (
    <div className="Nav">
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">News</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ms-auto">
              <Link to="/" className="nav-link">Home</Link>
              <Link to="/about" className="nav-link">About</Link>
              <Link to="/signup" className="nav-link">SignUp</Link>
              <Link to="/login" className="nav-link">Login</Link>
              <Link to="/user/akash" className="nav-link">TestNotFound</Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav_Bar;
