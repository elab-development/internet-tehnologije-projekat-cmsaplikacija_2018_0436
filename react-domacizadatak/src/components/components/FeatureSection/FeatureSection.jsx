import React, { useState } from "react";
import "./FeatureSection.css";

const FeatureSection = () => {
  const [features, setFeatures] = useState([
    {
      id: 1,
      bgColor: "#ffffff",
      textColor: "#000000",
      icon: "fas fa-cogs",
      title: "Customizable",
      description: "Easily customize your experience to fit your needs.",
    },
    {
      id: 2,
      bgColor: "#ffffff",
      textColor: "#000000",
      icon: "fas fa-shield-alt",
      title: "Secure",
      description: "Top-notch security to protect your data.",
    },
    {
      id: 3,
      bgColor: "#ffffff",
      textColor: "#000000",
      icon: "fas fa-tachometer-alt",
      title: "Fast",
      description: "Optimized for speed and performance.",
    },
  ]);

  const [showCustomization, setShowCustomization] = useState(true);

  const updateFeature = (id, key, value) => {
    setFeatures(
      features.map((feature) =>
        feature.id === id ? { ...feature, [key]: value } : feature
      )
    );
  };

  return (
    <div>
      <section className="features">
        {features.map((feature) => (
          <div
            key={feature.id}
            className="feature"
            style={{ backgroundColor: feature.bgColor }}
          >
            <i
              className={feature.icon}
              style={{ color: feature.textColor }}
            ></i>
            <h3 style={{ color: feature.textColor }}>{feature.title}</h3>
            <p style={{ color: feature.textColor }}>{feature.description}</p>
          </div>
        ))}
      </section>

      {showCustomization && (
        <div className="editor">
          {features.map((feature) => (
            <div key={feature.id} className="editor-section">
              <h3>Feature {feature.id} Customization</h3>
              <label>Background Color: </label>
              <input
                type="color"
                value={feature.bgColor}
                onChange={(e) =>
                  updateFeature(feature.id, "bgColor", e.target.value)
                }
              />
              <br />
              <label>Text Color: </label>
              <input
                type="color"
                value={feature.textColor}
                onChange={(e) =>
                  updateFeature(feature.id, "textColor", e.target.value)
                }
              />
              <br />
              <label>Icon Class: </label>
              <input
                type="text"
                value={feature.icon}
                onChange={(e) =>
                  updateFeature(feature.id, "icon", e.target.value)
                }
              />
              <br />
              <label>Title: </label>
              <input
                type="text"
                value={feature.title}
                onChange={(e) =>
                  updateFeature(feature.id, "title", e.target.value)
                }
              />
              <br />
              <label>Description: </label>
              <input
                type="text"
                value={feature.description}
                onChange={(e) =>
                  updateFeature(feature.id, "description", e.target.value)
                }
              />
            </div>
          ))}
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

export default FeatureSection;
