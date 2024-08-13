import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";

const Navigacioni = () => {
  useEffect(() => {
    const navbarMenu = document.getElementById("menu");
    const burgerMenu = document.getElementById("burger");

    // Open Close Navbar Menu on Click Burger
    if (burgerMenu && navbarMenu) {
      const handleBurgerClick = () => {
        burgerMenu.classList.toggle("is-active");
        navbarMenu.classList.toggle("is-active");
      };

      burgerMenu.addEventListener("click", handleBurgerClick);

      // Cleanup event listeners on component unmount
      return () => {
        burgerMenu.removeEventListener("click", handleBurgerClick);
      };
    }

    // Close Navbar Menu on Click Menu Links
    const handleMenuClick = () => {
      burgerMenu.classList.remove("is-active");
      navbarMenu.classList.remove("is-active");
    };

    document.querySelectorAll(".menu-link").forEach((link) => {
      link.addEventListener("click", handleMenuClick);

      // Cleanup event listeners on component unmount
      return () => {
        link.removeEventListener("click", handleMenuClick);
      };
    });

    // Fixed Navbar Menu on Window Resize
    const handleResize = () => {
      if (window.innerWidth > 768) {
        if (navbarMenu.classList.contains("is-active")) {
          navbarMenu.classList.remove("is-active");
        }
      }
    };

    window.addEventListener("resize", handleResize);

    // Cleanup on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
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
