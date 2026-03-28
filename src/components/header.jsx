import { Link } from "react-router-dom";
import LOGO from "/LOGO.svg"
import "../styles/header.css"

const Header = () => {
  return (
    <header>
      <img src={LOGO} alt="logo" />
      <div className="nav-header">
        <ul>
          <li>
            <Link to="/">Accueil</Link>
          </li>
          <li>
            <Link to="/a_propos">A Propos</Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;