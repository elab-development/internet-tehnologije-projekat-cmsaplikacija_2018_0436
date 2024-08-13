import React, { useState } from "react";
import "./FeatureSection.css";

const FeatureSection = () => {
  const [features, setFeatures] = useState([
    {
      id: 1,
      bgColor: "#ffffff",
      textColor: "#000000",
      title: "Prilagodljiv",
      description: "Lako prilagodi sajt svojim potrebama.",
    },
    {
      id: 2,
      bgColor: "#ffffff",
      textColor: "#000000",
      title: "Bezbedan",
      description: "Visoka pouzdanost stiti tvoje podatke.",
    },
    {
      id: 3,
      bgColor: "#ffffff",
      textColor: "#000000",
      title: "Brz",
      description: "Optimizovan za brzinu i performanse.",
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
              <h3>Namestanje dizajna za {feature.id}. karticu </h3>
              <label>Boja pozadine: </label>
              <input
                type="color"
                value={feature.bgColor}
                onChange={(e) =>
                  updateFeature(feature.id, "bgColor", e.target.value)
                }
              />
              <br />
              <label>Boja teksta: </label>
              <input
                type="color"
                value={feature.textColor}
                onChange={(e) =>
                  updateFeature(feature.id, "textColor", e.target.value)
                }
              />
              <br />

              <label>Naslov: </label>
              <input
                type="text"
                value={feature.title}
                onChange={(e) =>
                  updateFeature(feature.id, "title", e.target.value)
                }
              />
              <br />
              <label>Opis: </label>
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
            Zavrsi dizajniranje
          </button>
        </div>
      )}
    </div>
  );
};

export default FeatureSection;
