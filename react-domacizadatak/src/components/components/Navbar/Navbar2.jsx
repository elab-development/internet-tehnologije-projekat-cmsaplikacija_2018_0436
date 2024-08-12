import React, { useState } from "react";
import "./Navbar2.css";

const Navbar2 = () => {
  const [bgColor, setBgColor] = useState("#ca7171");
  const [textColor, setTextColor] = useState("#ffffff");
  const [logoText, setLogoText] = useState("Logo");
  const [menuItems, setMenuItems] = useState([
    "Home",
    "Services",
    "About",
    "Contact",
  ]);
  const [showCustomization, setShowCustomization] = useState(true);

  const handleMenuItemChange = (index, newValue) => {
    const newMenuItems = [...menuItems];
    newMenuItems[index] = newValue;
    setMenuItems(newMenuItems);
  };

  return (
    <>
      <nav id="navbar" className="navbar" style={{ backgroundColor: bgColor }}>
        <div className="nav-wrapper">
          <div className="logo">
            <a href="#home" style={{ color: textColor }}>
              <i className="fas fa-chess-knight"></i> {logoText}
            </a>
          </div>

          <ul id="menu">
            {menuItems.map((item, index) => (
              <li key={index}>
                <a href={`#${item.toLowerCase()}`} style={{ color: textColor }}>
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

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
            <label>Text Color: </label>
            <input
              type="color"
              value={textColor}
              onChange={(e) => setTextColor(e.target.value)}
            />
          </div>
          <div className="editor-section">
            <label>Logo Text: </label>
            <input
              type="text"
              value={logoText}
              onChange={(e) => setLogoText(e.target.value)}
            />
          </div>
          <div className="editor-section">
            <label>Menu Items: </label>
            <br></br>
            {menuItems.map((item, index) => (
              <input
                key={index}
                type="text"
                value={item}
                onChange={(e) => handleMenuItemChange(index, e.target.value)}
              />
            ))}
          </div>
          <button
            onClick={() => setShowCustomization(false)}
            className="remove-customization-button"
          >
            Remove Customization
          </button>
        </div>
      )}
    </>
  );
};

export default Navbar2;
