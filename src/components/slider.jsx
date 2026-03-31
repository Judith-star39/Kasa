import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import "../styles/logement.css";

export default function Slider({ pictures }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!pictures || pictures.length === 0) {
    return <p>Aucune image</p>;
  }

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? pictures.length - 1 : prev - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === pictures.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className="slider">
      <img
        src={pictures[currentIndex]}
        alt={`Photo ${currentIndex + 1}`}
        className="slider-img"
      />

      {pictures.length > 1 && (
        <>
          <button className="prev" onClick={prevSlide}>
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>

          <button className="next" onClick={nextSlide}>
            <FontAwesomeIcon icon={faChevronRight} />
          </button>

          <p className="indicator">
            {currentIndex + 1} / {pictures.length}
          </p>
        </>
      )}
    </div>
  );
}