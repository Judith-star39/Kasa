import { Link } from "react-router-dom";
import logements from "../data.json";
import "../styles/gallery.css";

export default function Gallery() {
  return (
    <section className="gallery-content">
      {logements.map((logement) => (
        <Link to={`/logement/${logement.id}`} key={logement.id}>
          <div className="cards">
            <img src={logement.cover} alt={logement.title} />
            <h3>{logement.title}</h3>
          </div>
        </Link>
      ))}
    </section>
  );
}
