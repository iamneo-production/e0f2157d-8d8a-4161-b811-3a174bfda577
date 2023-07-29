import "./navbar.css";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navContainer">
        <span className="logo">Explora.com</span>
        <div className="navItems">
          <Link className="navButton" to={"/login"}>
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
