import React, { useState } from "react";
import "./Paragraph.css";

const Paragraph = () => {
  const [paragraph, setParagraph] = useState({
    text: "Paragraph",
    marginLeft: "40px",
    textColor: "#000000",
    bgColor: "#ffffff",
  });

  const [showCustomization, setShowCustomization] = useState(true);

  const updateParagraph = (key, value) => {
    setParagraph({ ...paragraph, [key]: value });
  };

  return (
    <div>
      <div
        className="paragraph-container"
        style={{ backgroundColor: paragraph.bgColor }}
      >
        <p
          style={{
            marginLeft: paragraph.marginLeft,
            color: paragraph.textColor,
          }}
        >
          {paragraph.text}
        </p>
      </div>

      {showCustomization && (
        <div className="editor">
          <h3>Paragraph Customization</h3>
          <label>Paragraph Text: </label>
          <input
            type="text"
            value={paragraph.text}
            onChange={(e) => updateParagraph("text", e.target.value)}
          />
          <br />
          <label>Margin Left: </label>
          <input
            type="text"
            value={paragraph.marginLeft}
            onChange={(e) => updateParagraph("marginLeft", e.target.value)}
          />
          <br />
          <label>Text Color: </label>
          <input
            type="color"
            value={paragraph.textColor}
            onChange={(e) => updateParagraph("textColor", e.target.value)}
          />
          <br />
          <label>Background Color: </label>
          <input
            type="color"
            value={paragraph.bgColor}
            onChange={(e) => updateParagraph("bgColor", e.target.value)}
          />
          <br />
          <button
            onClick={() => setShowCustomization(false)}
            className="remove-customization-button"
          >
            Remove Customization
          </button>
        </div>
      )}
    </div>
  );
};

export default Paragraph;
