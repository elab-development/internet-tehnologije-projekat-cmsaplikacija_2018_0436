import React, { useState } from "react";
import "./Sidebar.css";

const Sidebar = () => {
  const [sidebar, setSidebar] = useState({
    bgColor: "#ffffff",
    textColor: "#000000",
    userImage: "https://via.placeholder.com/100",
    username: "John Doe",
    links: [
      { id: 1, text: "Home", href: "#home" },
      { id: 2, text: "Services", href: "#services" },
      { id: 3, text: "About", href: "#about" },
      { id: 4, text: "Contact", href: "#contact" },
    ],
  });

  const [showCustomization, setShowCustomization] = useState(true);

  const updateSidebar = (key, value) => {
    setSidebar({ ...sidebar, [key]: value });
  };

  const updateLink = (id, key, value) => {
    setSidebar({
      ...sidebar,
      links: sidebar.links.map((link) =>
        link.id === id ? { ...link, [key]: value } : link
      ),
    });
  };

  return (
    <div>
      <div
        className="sidebar-component"
        style={{ backgroundColor: sidebar.bgColor }}
      >
        <div className="sidebar-header">
          <img
            src={sidebar.userImage}
            alt="User"
            className="sidebar-user-img"
          />
          <h3 className="sidebar-username" style={{ color: sidebar.textColor }}>
            {sidebar.username}
          </h3>
        </div>
        <ul className="sidebar-nav">
          {sidebar.links.map((link) => (
            <li key={link.id}>
              <a
                href={link.href}
                className="sidebar-link"
                style={{ color: sidebar.textColor }}
              >
                {link.text}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {showCustomization && (
        <div className="editor">
          <h3>Sidebar Customization</h3>
          <label>Background Color: </label>
          <input
            type="color"
            value={sidebar.bgColor}
            onChange={(e) => updateSidebar("bgColor", e.target.value)}
          />
          <br />
          <label>Text Color: </label>
          <input
            type="color"
            value={sidebar.textColor}
            onChange={(e) => updateSidebar("textColor", e.target.value)}
          />
          <br />
          <label>User Image URL: </label>
          <input
            type="text"
            value={sidebar.userImage}
            onChange={(e) => updateSidebar("userImage", e.target.value)}
          />
          <br />
          <label>Username: </label>
          <input
            type="text"
            value={sidebar.username}
            onChange={(e) => updateSidebar("username", e.target.value)}
          />
          <br />
          <label>Links: </label>
          {sidebar.links.map((link) => (
            <div key={link.id}>
              <label>Text: </label>
              <input
                type="text"
                value={link.text}
                onChange={(e) => updateLink(link.id, "text", e.target.value)}
              />
              <br />
              <label>URL: </label>
              <input
                type="text"
                value={link.href}
                onChange={(e) => updateLink(link.id, "href", e.target.value)}
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

export default Sidebar;
