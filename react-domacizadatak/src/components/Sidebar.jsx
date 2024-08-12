import React, { useState } from "react";
import DraggableComponent from "./DraggableComponent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons"; // Import the icons you need

const Sidebar = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const [isFooterOpen, setIsFooterOpen] = useState(false);
  const [isHeroOpen, setIsHeroOpen] = useState(false);
  const [isCardOpen, setIsCardOpen] = useState(false);
  const [isFeatureOpen, setIsFeatureOpen] = useState(false);
  const [isHeadingOpen, setIsHeadingOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  const toggleNavbarDropdown = () => setIsNavbarOpen(!isNavbarOpen);
  const toggleHeroDropdown = () => setIsHeroOpen(!isHeroOpen);
  const toggleCardDropdown = () => setIsCardOpen(!isCardOpen);
  const toggleFeatureDropdown = () => setIsFeatureOpen(!isFeatureOpen);
  const toggleSidebarDropdown = () => setIsSidebarOpen(!isSidebarOpen);
  const toggleFooterDropdown = () => setIsFooterOpen(!isFooterOpen);
  const toggleSidebar = () => setIsSidebarCollapsed(!isSidebarCollapsed);
  const toggleHeadingDropdown = () => setIsHeadingOpen(!isHeadingOpen);

  return (
    <div className={`sidebar ${isSidebarCollapsed ? "collapsed" : ""}`}>
      <button className="collapse-button" onClick={toggleSidebar}>
        {isSidebarCollapsed ? (
          <FontAwesomeIcon icon={faBars} />
        ) : (
          <FontAwesomeIcon icon={faXmark} />
        )}
      </button>

      <div className="dropdownBox">
        {!isSidebarCollapsed && (
          <>
            {/* Navbar  */}
            <div className="dropdown">
              <button
                className="dropdown-button"
                onClick={toggleNavbarDropdown}
              >
                Navbar
              </button>
              {isNavbarOpen && (
                <div className="dropdown-content">
                  <DraggableComponent type="NAVBAR">
                    <button className="componentText">
                      Navbar Component 1
                    </button>
                  </DraggableComponent>
                  <DraggableComponent type="NAVBAR2">
                    <button className="componentText">
                      Navbar Component 2
                    </button>
                  </DraggableComponent>
                </div>
              )}
            </div>
            {/* Hero Section  */}
            <div className="dropdown">
              <button className="dropdown-button" onClick={toggleHeroDropdown}>
                Hero Section
              </button>
              {isHeroOpen && (
                <div className="dropdown-content">
                  <DraggableComponent type="HERO">
                    <button className="componentText">Hero Component 1</button>
                  </DraggableComponent>
                </div>
              )}
            </div>
            {/* Card Section */}
            <div className="dropdown">
              <button className="dropdown-button" onClick={toggleCardDropdown}>
                Card
              </button>
              {isCardOpen && (
                <div className="dropdown-content">
                  <DraggableComponent type="CARD">
                    <button className="componentText">Card Component 1</button>
                  </DraggableComponent>
                  <DraggableComponent type="CARD2">
                    <button className="componentText">Card Component 2</button>
                  </DraggableComponent>
                </div>
              )}
            </div>
            {/* Feature Section */}
            <div className="dropdown">
              <button
                className="dropdown-button"
                onClick={toggleFeatureDropdown}
              >
                Feature Section
              </button>
              {isFeatureOpen && (
                <div className="dropdown-content">
                  <DraggableComponent type="FEATURES">
                    <button className="componentText">
                      Feature Component 1
                    </button>
                  </DraggableComponent>
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="dropdown">
              <button
                className="dropdown-button"
                onClick={toggleFooterDropdown}
              >
                Footer
              </button>
              {isFooterOpen && (
                <div className="dropdown-content">
                  <DraggableComponent type="FOOTER">
                    <button className="componentText">Footer</button>
                  </DraggableComponent>
                </div>
              )}
            </div>
            {/* Typography */}
            <div className="dropdown">
              <button
                className="dropdown-button"
                onClick={toggleHeadingDropdown}
              >
                Typography
              </button>
              {isHeadingOpen && (
                <div className="dropdown-content">
                  <DraggableComponent type="HEADING">
                    <button className="componentText">Heading</button>
                  </DraggableComponent>
                  <DraggableComponent type="PARAGRAPH">
                    <button className="componentText">Paragraph</button>
                  </DraggableComponent>
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
