import { useEffect, useState } from "react"; 
import { useParams, Navigate } from "react-router-dom"; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import Slider from "../components/slider"; 
import Collapse from "../components/collapse";

export default function Logement() {
  const { id } = useParams();
  const [logement, setLogement] = useState(null);
  const [notFound, setNotFound] = useState(false); 

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((item) => item.id === id);
        if (!found) {
          setNotFound(true); 
        } else {
          setLogement(found);
        }
      })
      .catch((error) => console.error(error));
  }, [id]);

  if (notFound) return <Navigate to="/page404" />; 
  if (!logement) return null; 

  return (
    <div className="lodging-page">
        <Slider pictures={logement.pictures} />

        <div className="lodging-header">
            <div className="left">
                <h1>{logement.title}</h1>
                <h3>{logement.location}</h3>
            </div>
            <div className="right">
                <div className="host">
                    <p className="host-name">{logement.host.name}</p>
                    <img src={logement.host.picture} alt="host" />
                </div>
            </div>
        </div>

        <div className="info-row">
            <div className="tags">
                {logement.tags.map((tag, index) => (
                    <span key={index} className="tag">{tag}</span>
                ))}
            </div>
            <div className="rating-host">
                <div className="rating">
                    {[1, 2, 3, 4, 5].map((num) => (
                    <FontAwesomeIcon
                        key={num}
                        icon={faStar}
                        className={`star ${num <= Number(logement.rating) ? "active" : ""}`}
                    />
                    ))}
                </div>
            </div>
            <div className="host">
                <p className="host-name">{logement.host.name}</p>
                <img src={logement.host.picture} alt="host" />
            </div>
        </div>
        
        <div className="DropDown-lodging">
            <Collapse title="Description" description={logement.description} />
            <Collapse title="Équipements" description={logement.equipments} />
        </div>
    </div>
  );
}