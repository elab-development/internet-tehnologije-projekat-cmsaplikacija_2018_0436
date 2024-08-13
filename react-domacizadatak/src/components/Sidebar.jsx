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
            {/* Navbar sekcija  */}
            <div className="dropdown">
              <button
                className="dropdown-button"
                onClick={toggleNavbarDropdown}
              >
                Navigacioni meni
              </button>
              {isNavbarOpen && (
                <div className="dropdown-content">
                  <DraggableComponent type="NAVBAR">
                    <button className="componentText">
                      Navigacioni meni - varijanta 1
                    </button>
                  </DraggableComponent>
                  <DraggableComponent type="NAVBAR2">
                    <button className="componentText">
                      Navigacioni meni - varijanta 2
                    </button>
                  </DraggableComponent>
                </div>
              )}
            </div>
            {/* Glavna sekcija  */}
            <div className="dropdown">
              <button className="dropdown-button" onClick={toggleHeroDropdown}>
                Glavna sekcija
              </button>
              {isHeroOpen && (
                <div className="dropdown-content">
                  <DraggableComponent type="HERO">
                    <button className="componentText">Glavna komponenta</button>
                  </DraggableComponent>
                </div>
              )}
            </div>
            {/*  Sekcija sa karticama */}
            <div className="dropdown">
              <button className="dropdown-button" onClick={toggleCardDropdown}>
                Kartice
              </button>
              {isCardOpen && (
                <div className="dropdown-content">
                  <DraggableComponent type="CARD">
                    <button className="componentText">
                      Komponenta kartice - varijanta 1
                    </button>
                  </DraggableComponent>
                  <DraggableComponent type="CARD2">
                    <button className="componentText">
                      Komponenta kartice - varijanta 2
                    </button>
                  </DraggableComponent>
                </div>
              )}
            </div>
            {/* Funkcionalna sekcija */}
            <div className="dropdown">
              <button
                className="dropdown-button"
                onClick={toggleFeatureDropdown}
              >
                Funkcionalna sekcija
              </button>
              {isFeatureOpen && (
                <div className="dropdown-content">
                  <DraggableComponent type="FEATURES">
                    <button className="componentText">
                      Komponenta funkcionalne sekcije
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
                    <button className="componentText">Footer komponenta</button>
                  </DraggableComponent>
                </div>
              )}
            </div>
            {/* Tektualna sekcija */}
            <div className="dropdown">
              <button
                className="dropdown-button"
                onClick={toggleHeadingDropdown}
              >
                Tekstualna sekcija
              </button>
              {isHeadingOpen && (
                <div className="dropdown-content">
                  <DraggableComponent type="HEADING">
                    <button className="componentText">Naslov</button>
                  </DraggableComponent>
                  <DraggableComponent type="PARAGRAPH">
                    <button className="componentText">Paragraf</button>
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
