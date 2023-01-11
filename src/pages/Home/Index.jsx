import React from "react";
import { Card } from "../../components/Main/Card";
import { Hero } from "../../components/Main/Hero";
import { Icons } from "../../components/Main/Icons";
import { Maps } from "../../components/Main/Maps";
import { Parrafos } from "../../components/Main/Parrafos";
import { Parrafos2 } from "../../components/Main/Parrafos2";
import "../../components/Main/bodyRandom.css";
import { Footer } from "../../components/Main/Footer";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Helmet} from "react-helmet";

const Home = () => {
  return (
    <>
      <main className="container-index" id="home">
      <Helmet>
        <title>Hotel Miramar</title>
        <meta name="author" content="Arias Gibert Marianela" />
        <meta name="description" content="En el Hotel Miramar ofrecemos a los huéspedes, un espacio de descanso, confort y excelente nivel de servicio, el mismo esta bicado en pleno centro de la Ciudad de Cordoba" />
        <meta name="keywords" content="Hotel Miramar, Cordoba, capital, descanso, confort, vacaciones"></meta>
      </Helmet>
        <Hero />
        <Container>
        <Row>
          <Col fluid="lg">
           <Icons />
            <Parrafos />
            <Card />
            <Parrafos2 />
            <Maps />
            <Footer />
          </Col>
        </Row>
        </Container>
      </main>
    </>
  );
};

export { Home };
