import React, { useState } from "react";
import "./Heading.css";

const Heading = () => {
  const [heading, setHeading] = useState({
    text: "Heading",
    marginLeft: "40px",
    textColor: "#000000",
    bgColor: "#ffffff",
  });

  const [showCustomization, setShowCustomization] = useState(true);

  const updateHeading = (key, value) => {
    setHeading({ ...heading, [key]: value });
  };

  return (
    <div>
      <div
        className="heading-container"
        style={{ backgroundColor: heading.bgColor }}
      >
        <h1
          style={{ marginLeft: heading.marginLeft, color: heading.textColor }}
        >
          {heading.text}
        </h1>
      </div>

      {showCustomization && (
        <div className="editor">
          <h3>Dizajniranje naslova</h3>
          <label>Tekst naslova: </label>
          <input
            type="text"
            value={heading.text}
            onChange={(e) => updateHeading("text", e.target.value)}
          />
          <br />
          <label>Leva margina: </label>
          <input
            type="text"
            value={heading.marginLeft}
            onChange={(e) => updateHeading("marginLeft", e.target.value)}
          />
          <br />
          <label>Boja teksta: </label>
          <input
            type="color"
            value={heading.textColor}
            onChange={(e) => updateHeading("textColor", e.target.value)}
          />
          <br />
          <label>Boja pozadine: </label>
          <input
            type="color"
            value={heading.bgColor}
            onChange={(e) => updateHeading("bgColor", e.target.value)}
          />
          <br />
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

export default Heading;
