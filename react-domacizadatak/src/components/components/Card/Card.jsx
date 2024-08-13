import React, { useState } from "react";
import "./Card.css";

const Card = () => {
  const [bgColor, setBgColor] = useState("#ffffff");
  const [textColor, setTextColor] = useState("#000000");
  const [titleText, setTitleText] = useState("TITLE");
  const [descriptionText, setDescriptionText] = useState("description");
  const [showCustomization, setShowCustomization] = useState(true);

  return (
    <div>
      <div className="card" style={{ backgroundColor: bgColor }}>
        <div className="card-content" style={{ color: textColor }}>
          <h3>{titleText}</h3>
          <p>{descriptionText}</p>
        </div>
      </div>

      {showCustomization && (
        <div className="editor">
          <div className="editor-section">
            <label>Background Color: </label>
            <input
              type="color"
              value={bgColor}
              onChange={(e) => setBgColor(e.target.value)}
            />
          </div>
          <div className="editor-section">
            <label>Boja teksta: </label>
            <input
              type="color"
              value={textColor}
              onChange={(e) => setTextColor(e.target.value)}
            />
          </div>
          <div className="editor-section">
            <label>Naslovni tekst: </label>
            <input
              type="text"
              value={titleText}
              onChange={(e) => setTitleText(e.target.value)}
            />
          </div>
          <div className="editor-section">
            <label>Tekst za opis: </label>
            <input
              type="text"
              value={descriptionText}
              onChange={(e) => setDescriptionText(e.target.value)}
            />
          </div>
          <button
            onClick={() => setShowCustomization(false)}
            className="remove-customization-button"
          >
            Zavrsi dizajniranje
          </button>
        </div>
      )}
    </div>
  );
};

export default Card;
