import React from "react";
import photoImg from "../assets/photo.png";
import Navigacioni from "./Navigacioni";
import useForm from "./hooks/useForm";

const Contact = () => {
  // Funkcija validacije forme
  const validate = (formData) => {
    const errors = {};

    if (!formData.name) errors.name = "Ime je obavezno.";
    if (!formData.email) {
      errors.email = "E-mail adresa je obavezna.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Neispravan format e-mail adrese.";
    }

    if (!formData.message) errors.message = "Poruka je obavezna.";

    return errors;
  };

  // Using the custom hook
  const { formData, errors, handleChange, handleSubmit } = useForm(
    {
      name: "",
      email: "",
      message: "",
    },
    validate
  );

  // Callback funkcija za uspesno submitovanje forme
  const onSubmit = () => {
    alert("Poruka uspešno poslata!");
  };

  return (
    <div>
      <Navigacioni />
      <section className="contact" id="#contact">
        <div className="container ">
          <div className="container d-flex justify-content-center align-items-center banner-column">
            <form onSubmit={(e) => handleSubmit(e, onSubmit)}>
              <br />
              <br />
              <h1>Kontaktiraj nas</h1>

              <div className="center">
                <label htmlFor="formName" className="d-block">
                  <i className="icon" data-feather="user"></i>
                </label>
                <input
                  type="text"
                  id="formName"
                  name="name"
                  className="form-control form-control-lg thick"
                  placeholder="Vaše ime..."
                  value={formData.name}
                  onChange={handleChange}
                />
                {errors.name && (
                  <div className="text-danger">{errors.name}</div>
                )}
              </div>

              <div className="form-group position-relative">
                <label htmlFor="formEmail" className="d-block">
                  <i className="icon" data-feather="mail"></i>
                </label>
                <input
                  type="email"
                  id="formEmail"
                  name="email"
                  className="form-control form-control-lg thick"
                  placeholder="E-mail adresa..."
                  value={formData.email}
                  onChange={handleChange}
                />
                {errors.email && (
                  <div className="text-danger">{errors.email}</div>
                )}
              </div>

              <div className="form-group message">
                <textarea
                  id="formMessage"
                  name="message"
                  className="form-control form-control-lg"
                  rows="7"
                  placeholder="Mesto za Vašu poruku..."
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
                {errors.message && (
                  <div className="text-danger">{errors.message}</div>
                )}
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="btn btn-primary btn-center"
                  tabIndex="-1"
                >
                  Pošalji nam poruku putem forme!
                </button>
              </div>
            </form>
          </div>
          <img src={photoImg} alt="banner" />
        </div>
      </section>
    </div>
  );
};

export default Contact;
