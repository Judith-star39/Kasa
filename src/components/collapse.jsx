import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import "../styles/collapse.css";

export default function Collapse  ({ title, description }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="collapse">
      <div className="collapse-header" onClick={() => setOpen(!open)}>
        <h3>{title}</h3>
        <FontAwesomeIcon
          icon={faChevronUp}
          className={`collapse-icon ${open ? "rotate" : ""}`}
        />
      </div>

      {open && (
        <div className="collapse-content">
          {Array.isArray(description) ? (
            <ul>
              {description.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          ) : (
            <p>{description}</p>
          )}
        </div>
      )}
    </div>
  );
};
