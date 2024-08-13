import React, { useState, useRef, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useDrop } from "react-dnd";
import Navbar from "../components/Navbar/Navbar";
import Navbar2 from "../components/Navbar/Navbar2";
import Footer from "../components/Footer/Footer";
import HeroSection from "../components/HeroSection/Hero";
import Card from "../components/Card/Card";
import Card2 from "../components/Card/Card2";
import FeatureSection from "../components/FeatureSection/FeatureSection";
import { ItemTypes } from "../../utils/dragTypes";
import Heading from "../components/Heading/Heading";
import Paragraph from "../components/Heading/Paragraph";
import { exportAsPNG, exportAsHTML } from "../../utils/exportUtils";

const Canvas = () => {
  const [components, setComponents] = useState([]);
  const canvasRef = useRef(null);

  const [{ isOver }, drop] = useDrop({
    accept: ItemTypes.COMPONENT,
    drop: (item) => {
      const id = new Date().getTime();
      setComponents([...components, { type: item.type, id }]);
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  });

  const handleRemoveComponent = (id) => {
    setComponents(components.filter((component) => component.id !== id));
  };

  const combinedRef = useCallback(
    (node) => {
      drop(node);
      canvasRef.current = node;
    },
    [drop]
  );
  const hideRemoveButtons = () => {
    document.querySelectorAll(".remove-button").forEach((button) => {
      button.style.display = "none";
    });
  };

  const showRemoveButtons = () => {
    document.querySelectorAll(".remove-button").forEach((button) => {
      button.style.display = "block";
    });
  };

  const handleExportPNG = () => {
    hideRemoveButtons();
    exportAsPNG(canvasRef.current, "design.png").then(() => {
      showRemoveButtons();
    });
  };
  const handleExportHTML = () => {
    hideRemoveButtons();
    exportAsHTML(canvasRef.current, "design.html");
    showRemoveButtons();
  };

  const navigate = useNavigate();

  const handleReturnToHome = () => {
    navigate("/");
  };

  return (
    <div className="canvasOuter">
      <div className="export-buttons">
        <button
          onClick={handleExportPNG}
          className="btn btn-primary btn-export-buttons"
        >
          Exportuj kreirani sajt kao PNG sliku
        </button>
        <button
          className="btn btn-primary btn-export-buttons"
          onClick={handleExportHTML}
        >
          Exportuj kreirani sajt u HTML fajl
        </button>
        <button
          className="btn btn-primary btn-export-buttons"
          onClick={handleReturnToHome}
        >
          Vrati se na pocetnu stranu
        </button>
      </div>
      <div ref={combinedRef} className="canvas">
        {components.map((component) => {
          let Component;
          switch (component.type) {
            case "NAVBAR":
              Component = Navbar;
              break;
            case "NAVBAR2":
              Component = Navbar2;
              break;
            case "FOOTER":
              Component = Footer;
              break;
            case "HERO":
              Component = HeroSection;
              break;
            case "CARD":
              Component = Card;
              break;
            case "CARD2":
              Component = Card2;
              break;
            case "FEATURES":
              Component = FeatureSection;
              break;

            case "HEADING":
              Component = Heading;
              break;
            case "PARAGRAPH":
              Component = Paragraph;
              break;
            default:
              return null;
          }

          return (
            <div key={component.id} className="component-wrapper">
              <Component />
              <button
                onClick={() => handleRemoveComponent(component.id)}
                className="remove-button"
              >
                Ukloni komponentu
              </button>
            </div>
          );
        })}
        {isOver && <div className="overlay">Drop here!</div>}
      </div>
    </div>
  );
};

export default Canvas;
