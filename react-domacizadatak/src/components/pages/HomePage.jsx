import React from "react";
import { NavLink } from "react-router-dom";
import "../../App.css";
import iconImg from "../../assets/icon.png";
import photoImg from "../../assets/photo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import Navigacioni from "../reusable/Navigacioni";
import WeatherWidget from "../reusable/WeatherWidget";

const HomePage = () => {
  return (
    <>
      <div>
        <Navigacioni />
        <main className="main">
          <section className="section banner banner-section">
            <div className="container banner-column">
              <img className="banner-image" src={iconImg} alt="banner" />
              <div className="banner-inner">
                <h1 className="heading-xl">Drag and drop izrada sajtova</h1>
                <h4 className="heading-xs">sa nasim jedinstvenim resenjem</h4>
                <p className="paragraph">
                  Osnažite svoju kreativnost uz naš moćan i intuitivan alat za
                  izradu sajtova pomoću 'drag-and-drop' funkcije. Bilo da ste
                  iskusni dizajner ili potpuni početnik, naš alat vam omogućava
                  da jednostavno kreirate prelepe, responzivne sajtove.
                  Izaberite između različitih komponenti za prevlačenje i
                  puštanje, i prilagodite svaki element svojoj viziji. Recite
                  zbogom kompleksnom kodiranju i pozdravite jednostavnost i
                  eleganciju u dizajnu sajtova.
                </p>

                <NavLink to="/builder">
                  <button className="btn btn-darken btn-inline">
                    Isprobaj program! <FontAwesomeIcon icon={faArrowRight} />
                  </button>
                </NavLink>
              </div>
              <div className="banner-links">
                <FontAwesomeIcon icon={faLinkedin} />
                <FontAwesomeIcon icon={faGithub} />
                <FontAwesomeIcon icon={faEnvelope} />
              </div>
            </div>
          </section>
          <WeatherWidget />
          <h1 className="heading-xss">Domaci zadatak iz React-a, 2024.</h1>
        </main>
      </div>
    </>
  );
};

export default HomePage;
