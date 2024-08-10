import { NavLink } from "react-router-dom";
import "../App.css";
import iconImg from "../assets/icon.png";
import photoImg from "../assets/photo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

const HomePage = () => {
  const navbarMenu = document.getElementById("menu");
  const burgerMenu = document.getElementById("burger");
  const headerMenu = document.getElementById("header");

  // Open Close Navbar Menu on Click Burger
  if (burgerMenu && navbarMenu) {
    burgerMenu.addEventListener("click", () => {
      burgerMenu.classList.toggle("is-active");
      navbarMenu.classList.toggle("is-active");
    });
  }

  // Close Navbar Menu on Click Menu Links
  document.querySelectorAll(".menu-link").forEach((link) => {
    link.addEventListener("click", () => {
      burgerMenu.classList.remove("is-active");
      navbarMenu.classList.remove("is-active");
    });
  });

  // Fixed Navbar Menu on Window Resize
  window.addEventListener("resize", () => {
    if (window.innerWidth > 768) {
      if (navbarMenu.classList.contains("is-active")) {
        navbarMenu.classList.remove("is-active");
      }
    }
  });

  return (
    <>
      <header class="header" id="header">
        <nav class="navbar container">
          <a href="#" class="brand">
            DesignDrop.
          </a>
          <div class="burger" id="burger">
            <span class="burger-line"></span>
            <span class="burger-line"></span>
            <span class="burger-line"></span>
          </div>
          <div class="menu" id="menu">
            <ul class="menu-inner">
              <li class="menu-item">
                <NavLink to="/" class="menu-link">
                  Home
                </NavLink>
              </li>

              <li class="menu-item">
                <NavLink to="/" class="menu-link">
                  Suggestions
                </NavLink>
              </li>

              <li class="menu-item">
                <NavLink to="/" class="menu-link">
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>

          <NavLink to={"/builder"}>
            <button class="btn btn-primary" tabIndex="-1">
              Discover
            </button>
          </NavLink>
        </nav>
      </header>
      <main class="main">
        <section class="section banner banner-section">
          <div class="container banner-column">
            <img class="banner-image" src={iconImg} alt="banner" />
            <div class="banner-inner">
              <h1 class="heading-xl">Drag and drop izrada sajtova</h1>
              <h4 class="heading-xs">sa nasim jedinstvenim resenjem</h4>
              <p class="paragraph">
                Osnažite svoju kreativnost uz naš moćan i intuitivan alat za
                izradu sajtova pomoću 'drag-and-drop' funkcije. Bilo da ste
                iskusni dizajner ili potpuni početnik, naš alat vam omogućava da
                jednostavno kreirate prelepe, responzivne sajtove. Izaberite
                između različitih komponenti za prevlačenje i puštanje, i
                prilagodite svaki element svojoj viziji. Recite zbogom
                kompleksnom kodiranju i pozdravite jednostavnost i eleganciju u
                dizajnu sajtova.
              </p>

              <NavLink to="/builder">
                <button class="btn btn-darken btn-inline">
                  Isprobaj program! <i class="fa-solid fa-arrow-right"></i>{" "}
                </button>
              </NavLink>
            </div>
            <div class="banner-links">
              <FontAwesomeIcon icon={faLinkedin} />
              <FontAwesomeIcon icon={faGithub} />
              <FontAwesomeIcon icon={faEnvelope} />
            </div>
          </div>
        </section>

        <section className="contact" id="#contact">
          <div class="container">
            <img src={photoImg} alt="banner" />

            <div class="container d-flex justify-content-center align-items-center banner-column">
              <form>
                <br></br>
                <br></br>
                <h1 class=" text-center mb-4">Kontaktiraj nas</h1>

                <div class="form-group position-relative">
                  <label for="formName" class="d-block">
                    <i class="icon" data-feather="user"></i>
                  </label>
                  <input
                    type="text"
                    id="formName"
                    class="form-control form-control-lg thick"
                    placeholder="Vase ime..."
                  />
                </div>

                <div class="form-group position-relative">
                  <label for="formEmail" class="d-block">
                    <i class="icon" data-feather="mail"></i>
                  </label>
                  <input
                    type="email"
                    id="formEmail"
                    class="form-control form-control-lg thick"
                    placeholder="E-mail adresa..."
                  />
                </div>

                <div class="form-group message">
                  <textarea
                    id="formMessage"
                    class="form-control form-control-lg"
                    rows="7"
                    placeholder="Mesto za Vasu poruku..."
                  ></textarea>
                </div>

                <div class="text-center">
                  <button
                    type="submit"
                    class="btn btn-primary"
                    tabIndex="-1"
                    onClick={() => alert("Poruka uspesno poslata!")}
                  >
                    Posalji nam poruku!
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
        <h1 class="heading-xss">Domaci zadatak iz React-a, 2024.</h1>
      </main>
    </>
  );
};

export default HomePage;
