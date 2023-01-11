import React from "react";
import { HeaderSection } from "../../components/Main/HeaderSection";
import GaleriaHabit from "../../components/Main/GaleriaHabit";
import { Footer } from "../../components/Main/Footer";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "../../components/Main/bodyRandom.css";
import {Helmet} from "react-helmet";

const HabitacionesYs = () => {
  const section = "Habitaciones & Servicios";
  return (
    <>
      <main className="container-index">
      <Helmet>
        <title>Hotel Miramar</title>
        <meta name="author" content="Arias Gibert Marianela" />
        <meta name="description" content="En el Hotel Miramar ofrecemos a los huéspedes, un espacio de descanso, confort y excelente nivel de servicio, el mismo esta bicado en pleno centro de la Ciudad de Cordoba" />
        <meta name="keywords" content="Hotel Miramar, Cordoba, capital, habitaciones, servicios, desayuno, sala de conferencia, vacaciones"></meta>
      </Helmet>
        <HeaderSection section={section} />
        <Container>
        <Row>
          <Col fluid="lg">
          <section className="main-parra margen-botton">
            
          </section>
          <GaleriaHabit />
        <Footer />
        </Col>
        </Row>
        </Container>
      </main>
    </>
  );
};

export { HabitacionesYs };
