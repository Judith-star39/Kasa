import { Link } from "react-router-dom";
import img404 from "/img404.png";
import "../styles/page404.css"

export default function Page404  () {
    return (
        <div className="Page404">
            <img src={img404} alt="404"></img>
            <p> Oups! La page que vous demandez n'existe pas.</p>
            <Link to="/">Retourner sur la page d'accueil</Link>
      </div>
    )
}

