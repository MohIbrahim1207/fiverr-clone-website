import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="logo">fiverr</Link>

      <div className="nav-links">
        <Link to="/gigs">Explore</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Join</Link>
      </div>
    </nav>
  );
}

export default Navbar;
