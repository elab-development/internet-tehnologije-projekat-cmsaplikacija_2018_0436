import React, { useState } from "react";
import "./Hero.css";

const HeroSection = () => {
  const [bgColor, setBgColor] = useState("#1f4037");
  const [textColor, setTextColor] = useState("#ffffff");
  const [headingText, setHeadingText] = useState("Welcome to Our Website");
  const [paragraphText, setParagraphText] = useState(
    "Your success is our priority. Discover our services and solutions."
  );
  const [buttonText, setButtonText] = useState("Get Started");
  const [showCustomization, setShowCustomization] = useState(true);

  return (
    <div>
      <section className="hero" style={{ backgroundColor: bgColor }}>
        <div className="hero-content" style={{ color: textColor }}>
          <h1>{headingText}</h1>
          <p>{paragraphText}</p>
          <button className="hero-button" style={{ color: textColor }}>
            {buttonText}
          </button>
        </div>
      </section>

      {showCustomization && (
        <div className="editor">
          <div className="editor-section">
            <label>Boja pozadine: </label>
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
              value={headingText}
              onChange={(e) => setHeadingText(e.target.value)}
            />
          </div>
          <div className="editor-section">
            <label>Tekst u paragrafu: </label>
            <input
              type="text"
              value={paragraphText}
              onChange={(e) => setParagraphText(e.target.value)}
            />
          </div>
          <div className="editor-section">
            <label>Tekst unutar dugmeta: </label>
            <input
              type="text"
              value={buttonText}
              onChange={(e) => setButtonText(e.target.value)}
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

export default HeroSection;
