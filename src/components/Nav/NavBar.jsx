import React from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";

import "bootstrap/dist/css/bootstrap.min.css";
import "./nav.css";

const NavBar = () => {
  return (
    <>
      <div>
        {[false].map((expand) => (
          <Navbar
            key={expand}
            fixed="top"
            expand={expand}
            className="mb-3 nav"
            style={{
              lineHeight: "0",
              boxShadow: "none",
              backgroundColor: "transparent",
              width: "95%",
              height: "50px",
            }}
          >
            <Container fluid>
              <Navbar.Brand className="navBrand" href="#">
                Hotel Miramar
              </Navbar.Brand>
              <Navbar.Toggle
                aria-controls={`offcanvasNavbar-expand-${expand}`}
                style={{
                  soutline: "none",
                  borderStyle: "none",
                  boxShadow: "none",
                }}
              />
              <Navbar.Offcanvas
                id={`offcanvasNavbar-expand-${expand}`}
                aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                placement="end"
                className="navMenu"
                
              >
                <Offcanvas.Header closeButton className="navHeader">
                  <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                    Hotel Miramar
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <Nav className="justify-content-end flex-grow-1 pe-3">
                    <Nav.Link href="#action1">
                      <Link className="textLink main-parra_p" to="/">
                        Home
                      </Link>
                    </Nav.Link>
                    <Nav.Link href="#action2">
                      <Link to="/habitacionesYs" className="textLink main-parra_p">
                        Habitaciones & Servicios
                      </Link>
                    </Nav.Link>
                    <Nav.Link href="#action1">
                      <Link to="/contacto" className="textLink main-parra_p">
                        Contacto
                      </Link>
                    </Nav.Link>
                  </Nav>
                </Offcanvas.Body>
              </Navbar.Offcanvas>
            </Container>
          </Navbar>
        ))}
      </div>
    </>
  );
};

export default NavBar;
