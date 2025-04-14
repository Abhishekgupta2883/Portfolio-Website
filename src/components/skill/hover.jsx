import { useState } from "react";
import "./hover.css"; // Import CSS

const HoverCard = ({ title, description, image }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="hover-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Card Image */}
      <img src={image} alt={title} className="card-image" />

      {/* Hover Details */}
      <div className={`card-overlay ${isHovered ? "show" : ""}`}>
        <p className="card-description">{description}</p>
      </div>

      {/* Title Below Image */}
      <h3 className="card-title">{title}</h3>
    </div>
  );
};

export default HoverCard;
