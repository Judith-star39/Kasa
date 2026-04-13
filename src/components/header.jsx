import { NavLink } from "react-router-dom";
import LOGO from "/LOGO.svg";
import "../styles/header.css";

export default function  Header ()  {
  return (
    <header>
      <img src={LOGO} alt="logo" />
      <div className="nav-header">
        <ul>
          <li>
            <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>
              Accueil
            </NavLink>
          </li>
          <li>
            <NavLink to="/a_propos" className={({ isActive }) => isActive ? "active" : ""}>
              A Propos
            </NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
};

