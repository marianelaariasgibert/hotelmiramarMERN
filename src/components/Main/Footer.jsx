import React from "react";
import { RiFacebookFill } from "react-icons/ri";
import { GrInstagram } from "react-icons/gr";
import { SiWhatsapp } from "react-icons/si";
import { Router, Routes, Route, Link } from "react-router-dom";
import { Contacto } from "../../pages";
import "./bodyRandom.css";

const Footer = () => {
  return (
    <footer className="main-parra top-border footer-container">
      <button className="footer-button button-size">
        <Link to="/contacto" className="btn-footer">
          Contactanos
        </Link>
      </button>
        <Routes>
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
      <p className="footer-p main-parra_p">miramarhotel@gmail.com</p>
      <section className="footer-redes">
        <h1>
          <SiWhatsapp />
        </h1>
        <h1>
          <GrInstagram />
        </h1>
        <h1>
          <RiFacebookFill />
        </h1>
      </section>
    </footer>
  );
};

export { Footer };
