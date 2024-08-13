import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";

const Navigacioni = () => {
  useEffect(() => {
    const navbarMenu = document.getElementById("menu");
    const burgerMenu = document.getElementById("burger");

    // Funkcionalnost otvaranja/zatvaranje navigacionog menija na klik burger menija
    if (burgerMenu && navbarMenu) {
      const handleBurgerClick = () => {
        burgerMenu.classList.toggle("is-active");
        navbarMenu.classList.toggle("is-active");
      };

      burgerMenu.addEventListener("click", handleBurgerClick);

      // Kada sakrijemo burger meni, isto tako se brise i EventListener kako bi ponovo mogao u narednom kliku da obezbedi istu funkcionalnost
      return () => {
        burgerMenu.removeEventListener("click", handleBurgerClick);
      };
    }
  }, []);

  return (
    <header className="header" id="header">
      <nav className="navbar container">
        <NavLink to="/" className="brand">
          CMS sajt
        </NavLink>
        <div className="burger" id="burger">
          <span className="burger-line"></span>
          <span className="burger-line"></span>
          <span className="burger-line"></span>
        </div>
        <div className="menu" id="menu">
          <ul className="menu-inner">
            <li className="menu-item">
              <NavLink to="/" className="menu-link">
                Pocetna strana
              </NavLink>
            </li>

            <li className="menu-item">
              <NavLink to="/contact" className="menu-link">
                Kontaktiraj nas
              </NavLink>
            </li>
          </ul>
        </div>

        <NavLink to={"/builder"}>
          <button className="btn btn-primary" tabIndex="-1">
            Link do programa
          </button>
        </NavLink>
      </nav>
    </header>
  );
};

export default Navigacioni;
