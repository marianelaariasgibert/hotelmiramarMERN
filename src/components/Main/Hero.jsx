import React from "react";
import { Contacto } from "../../pages";
import { Router, Routes, Route, Link } from "react-router-dom";
import "./hero.css";

const Hero = () => {
  return (
    <header className="hero-container">
      <section className="hero-container_items">
        <h1 className="hero-container_H2">HOTEL MIRAMAR</h1>
        <hr className="border" />
        <p className="hero-container_parrafo">
        Vive una experiencia única en nuestro hotel. Descubre la esencia detrás de cada rincón.
        </p>
        <button className="boton-b">
          <Link to="/contacto" className="link-b">
            Contactanos
          </Link>
        </button>
        <Routes>
          <Route path="/contacto" element={<Contacto/>} />
        </Routes>
      </section>
    </header>
  );
};

export { Hero };
