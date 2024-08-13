import React, { useState } from "react";
import "./Footer.css";

const Footer = () => {
  const [sections, setSections] = useState([
    {
      id: 1,
      bgColor: "#ffffff",
      textColor: "#000000",
      title: "Kompanija",
      links: [
        "O nama",
        "Nase usluge",
        "Politika privatnosti",
        "Affiliate program",
      ],
    },
    {
      id: 2,
      bgColor: "#ffffff",
      textColor: "#000000",
      title: "Pomoc",
      links: [
        "FAQ",
        "Dostava",
        "Povracaj novca",
        "Status porudzbine",
        "Opcije placanja",
      ],
    },
    {
      id: 3,
      bgColor: "#ffffff",
      textColor: "#000000",
      title: "Internet prodavnica",
      links: ["Satovi", "Torbe", "Cipele", "Haljine"],
    },
    {
      id: 4,
      bgColor: "#ffffff",
      textColor: "#000000",
      title: "Zaprati nas na drustvenim mrezama!",
      links: ["Facebook", "Instagram", "Pinterest", "TikTok"],
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
              <label>Boja pozadine: </label>
              <input
                type="color"
                value={section.bgColor}
                onChange={(e) =>
                  updateSection(section.id, "bgColor", e.target.value)
                }
              />
              <br />
              <label>Boja teksta: </label>
              <input
                type="color"
                value={section.textColor}
                onChange={(e) =>
                  updateSection(section.id, "textColor", e.target.value)
                }
              />
              <br />
              <label>Naslov: </label>
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

export default Footer;
