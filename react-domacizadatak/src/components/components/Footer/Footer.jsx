import React, { useState } from "react";
import "./Footer.css";

const Footer = () => {
  const [sections, setSections] = useState([
    {
      id: 1,
      bgColor: "#ffffff",
      textColor: "#000000",
      title: "company",
      links: [
        "about us",
        "our services",
        "privacy policy",
        "affiliate program",
      ],
    },
    {
      id: 2,
      bgColor: "#ffffff",
      textColor: "#000000",
      title: "get help",
      links: ["FAQ", "shipping", "returns", "order status", "payment options"],
    },
    {
      id: 3,
      bgColor: "#ffffff",
      textColor: "#000000",
      title: "online shop",
      links: ["watch", "bag", "shoes", "dress"],
    },
    {
      id: 4,
      bgColor: "#ffffff",
      textColor: "#000000",
      title: "follow us",
      socialLinks: ["facebook", "twitter", "instagram", "linkedin"],
      socialIcons: [
        "fab fa-facebook-f",
        "fab fa-twitter",
        "fab fa-instagram",
        "fab fa-linkedin-in",
      ],
    },
  ]);

  const [showCustomization, setShowCustomization] = useState(true);

  const updateSection = (id, key, value) => {
    setSections(
      sections.map((section) =>
        section.id === id ? { ...section, [key]: value } : section
      )
    );
  };

  return (
    <div>
      <footer className="footer">
        <div className="container">
          <div className="row">
            {sections.map((section) => (
              <div
                key={section.id}
                className="footer-col"
                style={{ backgroundColor: section.bgColor }}
              >
                <h4 style={{ color: section.textColor }}>{section.title}</h4>
                {section.links && (
                  <ul style={{ color: section.textColor }}>
                    {section.links.map((link, index) => (
                      <li key={index}>
                        <a href="#">{link}</a>
                      </li>
                    ))}
                  </ul>
                )}
                {section.socialLinks && (
                  <div className="social-links">
                    {section.socialLinks.map((link, index) => (
                      <a key={index} href="#">
                        <i
                          className={section.socialIcons[index]}
                          style={{ color: section.textColor }}
                        ></i>
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </footer>

      {showCustomization && (
        <div className="editor">
          {sections.map((section) => (
            <div key={section.id} className="editor-section">
              <h3>{section.title} Customization</h3>
              <label>Background Color: </label>
              <input
                type="color"
                value={section.bgColor}
                onChange={(e) =>
                  updateSection(section.id, "bgColor", e.target.value)
                }
              />
              <br />
              <label>Text Color: </label>
              <input
                type="color"
                value={section.textColor}
                onChange={(e) =>
                  updateSection(section.id, "textColor", e.target.value)
                }
              />
              <br />
              <label>Title: </label>
              <input
                type="text"
                value={section.title}
                onChange={(e) =>
                  updateSection(section.id, "title", e.target.value)
                }
              />
              <br />
              {section.links && (
                <>
                  <label>Links: </label>
                  {section.links.map((link, index) => (
                    <div key={index}>
                      <input
                        type="text"
                        value={link}
                        onChange={(e) => {
                          const newLinks = [...section.links];
                          newLinks[index] = e.target.value;
                          updateSection(section.id, "links", newLinks);
                        }}
                      />
                    </div>
                  ))}
                </>
              )}
              {section.socialLinks && (
                <>
                  <label>Social Links: </label>
                  {section.socialLinks.map((link, index) => (
                    <div key={index}>
                      <input
                        type="text"
                        value={link}
                        onChange={(e) => {
                          const newSocialLinks = [...section.socialLinks];
                          newSocialLinks[index] = e.target.value;
                          updateSection(
                            section.id,
                            "socialLinks",
                            newSocialLinks
                          );
                        }}
                      />
                    </div>
                  ))}
                </>
              )}
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

export default Footer;
