import CartWidget from "../CartWidget/CartWidget";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-warning d-flex justify-content-around sticky-top">
      <Link to="/" className="navbar-brand fw-bold">
        Pac-Store
      </Link>
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink to="/category/television" className="nav-link">
            Televisores
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/category/notebook" className="nav-link">
            Notebooks
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/category/smartphone" className="nav-link">
            Celulares
          </NavLink>
        </li>
      </ul>
      <div>
        <CartWidget />
      </div>
    </nav>
  );
};

export default NavBar;
