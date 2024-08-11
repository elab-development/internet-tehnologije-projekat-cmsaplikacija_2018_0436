import React, { useState } from "react";
import "./Card2.css";

const Card2 = () => {
  const [cards, setCards] = useState([
    {
      id: 1,
      bgColor: "#ffffff",
      textColor: "#000000",
      title: "Card 1",
      description: "This is a description for card 1.",
      buttonText: "Learn More",
      imgSrc:
        "https://images.unsplash.com/photo-1505330622279-bf7d7fc918f4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8d2Vic2l0ZXxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: 2,
      bgColor: "#ffffff",
      textColor: "#000000",
      title: "Card 2",
      description: "This is a description for card 2.",
      buttonText: "Learn More",
      imgSrc:
        "https://images.unsplash.com/photo-1527689368864-3a821dbccc34?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHdlYnNpdGV8ZW58MHx8MHx8fDA%3D",
    },
    {
      id: 3,
      bgColor: "#ffffff",
      textColor: "#000000",
      title: "Card 3",
      description: "This is a description for card 3.",
      buttonText: "Learn More",
      imgSrc:
        "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHdlYnNpdGV8ZW58MHx8MHx8fDA%3D",
    },
  ]);

  const [showCustomization, setShowCustomization] = useState(true);

  const updateCard = (id, key, value) => {
    setCards(
      cards.map((card) => (card.id === id ? { ...card, [key]: value } : card))
    );
  };

  return (
    <div>
      <section className="card-section">
        {cards.map((card) => (
          <div
            key={card.id}
            className="card"
            style={{ backgroundColor: card.bgColor }}
          >
            <img
              src={card.imgSrc}
              alt={`card${card.id}`}
              className="card-image"
            />
            <div className="card-content" style={{ color: card.textColor }}>
              <h3>{card.title}</h3>
              <p>{card.description}</p>
              <button className="card-button">{card.buttonText}</button>
            </div>
          </div>
        ))}
      </section>

      {showCustomization && (
        <div className="editor">
          {cards.map((card) => (
            <div key={card.id} className="editor-section">
              <h3>Card {card.id} Customization</h3>
              <label>Background Color: </label>
              <input
                type="color"
                value={card.bgColor}
                onChange={(e) => updateCard(card.id, "bgColor", e.target.value)}
              />
              <br />
              <label>Text Color: </label>
              <input
                type="color"
                value={card.textColor}
                onChange={(e) =>
                  updateCard(card.id, "textColor", e.target.value)
                }
              />
              <br />
              <label>Title: </label>
              <input
                type="text"
                value={card.title}
                onChange={(e) => updateCard(card.id, "title", e.target.value)}
              />
              <br />
              <label>Description: </label>
              <input
                type="text"
                value={card.description}
                onChange={(e) =>
                  updateCard(card.id, "description", e.target.value)
                }
              />
              <br />
              <label>Button Text: </label>
              <input
                type="text"
                value={card.buttonText}
                onChange={(e) =>
                  updateCard(card.id, "buttonText", e.target.value)
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

export default Card2;
