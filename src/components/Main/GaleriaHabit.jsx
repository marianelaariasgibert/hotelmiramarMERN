import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";

//HABITACIONES IMG
import single from '../images/single.jpg'
import habDoble from '../images/doble.png'
import habTriple from '../images/triple.png'
import cuadruHabi from '../images/cuadruple.png'
import quintupleHabi from '../images/quintuple.png'
import sextuHabi from '../images/sextuple.jpg'
//H-SINGLE
import simgled1 from '../images/single/single-d1.jpg' 
import simgled2 from '../images/single/single-d2.jpg' 
//H-DOBLE
import dobled1 from '../images/doble/dobleD1.jpg'
import dobled2 from '../images/doble/dobleD2.jpg'
//H-TRIPLE
import tripled1 from '../images/triple/tripleD1.jpg'
import triple2 from '../images/triple/tripleD2.jpg'
//H-CUADRUPLE
import cuadrupleD1 from '../images/cuadruple/cuadrupleD1.jpg'
import cuadrupleD2 from '../images/cuadruple/cuadrupleD2.jpg'
//H-CUADRUPLE
import quintuD1 from '../images/quintuple/quintuD1.jpg'
import quintuD2 from '../images/quintuple/quintuD2.jpg'
//H-CUADRUPLE
import sextuD1 from '../images/sextuple/sextuD1.jpg'
import sextuD2 from '../images/sextuple/sextuD2.jpg'
//SERVICIOS
import desayuno from '../images/desayuno.jfif'
import pasillo from '../images/pasillo.jpg'
import pasillo2 from '../images/pasillo2.jpg'
import sala from '../images/sala.jpg'
import sala2 from '../images/sala2.jpg'
import "./bodyRandom.css";

const GaleriaHabit = () => {
  //MODAL IMG//
  const [show, setShow] = useState(false);
  const [tipoHabi, setTipoHabi] = useState("");
  const [imgHab, setImgHab] = useState(null);
  const [description, setDescription] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = (e) => {
    setShow(true);
    setTipoHabi(e.target.alt);
    setImgHab(e.target.src);
    setDescription(e.target.name);
  };


  return (
    <>
      <main className="galeria-container cards-container">
        <header className="container-linea margin">
          <h1 className="habi-h1">Habitaciones</h1>
          <hr className="linea1"></hr>
        </header>
        <section className="galeria-swiperItem">
          {/*HABITACION CARD 1*/}
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper swiper-margin"
          >
            <SwiperSlide className="swiper-container">
              <img
                className="swiper-habitaciones"
                src={single}
                alt="Habitacion single"
                onClick={handleShow}
                name={
                  "Escritorio de trabajo, Bar, Smart TV Conexión Wi-Fi, Secador y Productos de tocador"
                }
              />
              <section className="swiper-itemsText">
                <h5 className="swiper-h4">Single</h5>                
              </section>
            </SwiperSlide>
            <SwiperSlide className="swiper-container">
              <img
                className="swiper-habitaciones"
                src={simgled1}
                alt="Habitacion single"
                onClick={handleShow}
                name={
                  "Personal Bar, Smart TV, Teléfono inalámbrico, Conexión Wi-Fi, Secador y Productos de tocador"
                }
              />
              <section className="swiper-itemsText">
                <h5 className="swiper-h4">Single</h5>
              </section>
            </SwiperSlide>
            <SwiperSlide className="swiper-container">
              <img
                className="swiper-habitaciones"
                src={simgled2}
                alt="Habitacion single"
                onClick={handleShow}
                name={
                  "Escritorio, Personal Bar, Smart TV Conexión Wi-Fi, Secador y Productos de tocador"
                }
              />
              <section className="swiper-itemsText">
                <h5 className="swiper-h4">Single</h5>
              </section>
            </SwiperSlide>
          </Swiper>
          {/*HABITACION CARD 2*/}
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper swiper-margin"
          >
            <SwiperSlide className="swiper-container">
              <img
                className="swiper-habitaciones"
                src={habDoble}
                alt="Habitacion doble"
                onClick={handleShow}
                name={
                  "Bar, Smart TV, Notebook,Teléfono inalámbrico, Conexión Wi-Fi, Secador y Productos de tocador"
                }
              />
              <section className="swiper-itemsText">
                <h5 className="swiper-h4">Doble</h5>
              </section>
            </SwiperSlide>
            <SwiperSlide className="swiper-container">
              <img
                className="swiper-habitaciones"
                src={dobled1}
                alt="Habitacion doble"
                onClick={handleShow}
                name={
                  "escritorio de trabajo, Personal Bar, Batas y pantuflas, Smart TV, Teléfono inalámbrico, Cafetera"
                }
              />
              <section className="swiper-itemsText">
                <h5 className="swiper-h4">Doble</h5>
              </section>
            </SwiperSlide>
            <SwiperSlide className="swiper-container">
              <img
                className="swiper-habitaciones"
                src={dobled2}
                alt="Habitacion doble"
                onClick={handleShow}
                name={
                  "escritorio de trabajo, Personal Bar, Batas y pantuflas, Smart TV, Teléfono inalámbrico, Cafetera"
                }
              />
              <section className="swiper-itemsText">
                <h5 className="swiper-h4">Doble</h5>
              </section>
            </SwiperSlide>
          </Swiper>
          {/*HABITACION CARD 3*/}
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper swiper-margin"
          >
            <SwiperSlide className="swiper-container">
              <img
                className="swiper-habitaciones"
                src={habTriple}
                alt="Habitacion triple"
                onClick={handleShow}
                name={
                  "escritorio de trabajo, Personal Bar, Batas y pantuflas, Smart TV, Teléfono inalámbrico, Cafetera"
                }
              />
              <section className="swiper-itemsText">
                <h5 className="swiper-h4">Triple</h5>
              </section>
            </SwiperSlide>
            <SwiperSlide className="swiper-container">
              <img
                className="swiper-habitaciones"
                src={tripled1}
                alt="Habitacion triple"
                onClick={handleShow}
                name={
                  "escritorio de trabajo, Personal Bar, Batas y pantuflas, Smart TV, Teléfono inalámbrico, Cafetera"
                }
              />
              <section className="swiper-itemsText">
                <h5 className="swiper-h4">Triple</h5>
              </section>
            </SwiperSlide>
            <SwiperSlide className="swiper-container">
              <img
                className="swiper-habitaciones"
                src={triple2}
                alt="Habitacion triple"
                onClick={handleShow}
                name={
                  "escritorio de trabajo, Personal Bar, Batas y pantuflas, Smart TV, Teléfono inalámbrico, Cafetera"
                }
              />
              <section className="swiper-itemsText">
                <h5 className="swiper-h4">Triple</h5>
              </section>
            </SwiperSlide>
          </Swiper>
          {/*HABITACION CARD 4*/}
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper swiper-margin"
          >
            <SwiperSlide className="swiper-container">
              <img
                className="swiper-habitaciones"
                src={cuadruHabi}
                alt="Habitacion cuádruple"
                onClick={handleShow}
                name={
                  "escritorio de trabajo, Personal Bar, Batas y pantuflas, Smart TV, Teléfono inalámbrico, Cafetera"
                }
              />
              <section className="swiper-itemsText">
                <h5 className="swiper-h4">Cuádruple</h5>
              </section>
            </SwiperSlide>
            <SwiperSlide className="swiper-container">
              <img
                className="swiper-habitaciones"
                src={cuadrupleD1}
                alt="Habitacion cuádruple"
                onClick={handleShow}
                name={
                  "escritorio de trabajo, Personal Bar, Batas y pantuflas, Smart TV, Teléfono inalámbrico, Cafetera"
                }
              />
              <section className="swiper-itemsText">
                <h5 className="swiper-h4">Cuádruple</h5>
              </section>
            </SwiperSlide>
            <SwiperSlide className="swiper-container">
              <img
                className="swiper-habitaciones"
                src={cuadrupleD2}
                alt="Habitacion cuádruple"
                onClick={handleShow}
                name={
                  "escritorio de trabajo, Personal Bar, Batas y pantuflas, Smart TV, Teléfono inalámbrico, Cafetera"
                }
              />
              <section className="swiper-itemsText">
                <h5 className="swiper-h4">Cuádruple</h5>
              </section>
            </SwiperSlide>
          </Swiper>
          {/*HABITACION CARD 5*/}
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper swiper-margin"
          >
            <SwiperSlide className="swiper-container">
              <img
                className="swiper-habitaciones"
                src={quintupleHabi}
                alt="Habitacion quíntuple"
                onClick={handleShow}
                name={
                  "escritorio de trabajo, Personal Bar, Batas y pantuflas, Smart TV, Teléfono inalámbrico, Cafetera"
                }
              />
              <section className="swiper-itemsText">
                <h5 className="swiper-h4">Quíntuple</h5>
              </section>
            </SwiperSlide>
            <SwiperSlide className="swiper-container">
              <img
                className="swiper-habitaciones"
                src={quintuD1}
                alt="Habitacion quíntuple"
                onClick={handleShow}
                name={
                  "escritorio de trabajo, Personal Bar, Batas y pantuflas, Smart TV, Teléfono inalámbrico, Cafetera"
                }
              />
              <section className="swiper-itemsText">
                <h5 className="swiper-h4">Quíntuple</h5>
              </section>
            </SwiperSlide>
            <SwiperSlide className="swiper-container">
              <img
                className="swiper-habitaciones"
                src={quintuD2}
                alt="Habitacion quíntuple"
                onClick={handleShow}
                name={
                  "escritorio de trabajo, Personal Bar, Batas y pantuflas, Smart TV, Teléfono inalámbrico, Cafetera"
                }
              />
              <section className="swiper-itemsText">
                <h5 className="swiper-h4">Quíntuple</h5>
              </section>
            </SwiperSlide>
          </Swiper>
          {/*HABITACION CARD 6*/}
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper swiper-margin"
          >
            <SwiperSlide className="swiper-container">
              <img
                className="swiper-habitaciones"
                src={sextuHabi}
                alt="Habitacion séxtuple"
                onClick={handleShow}
                name={
                  "escritorio de trabajo, Personal Bar, Batas y pantuflas, Smart TV, Teléfono inalámbrico, Cafetera"
                }
              />
              <section className="swiper-itemsText">
                <h5 className="swiper-h4">Séxtuple</h5>
              </section>
            </SwiperSlide>
            <SwiperSlide className="swiper-container">
              <img
                className="swiper-habitaciones"
                src={sextuD1}
                alt="Habitacion séxtuple"
                onClick={handleShow}
                name={
                  "escritorio de trabajo, Personal Bar, Batas y pantuflas, Smart TV, Teléfono inalámbrico, Cafetera"
                }
              />
              <section className="swiper-itemsText">
                <h5 className="swiper-h4">Séxtuple</h5>
              </section>
            </SwiperSlide>
            <SwiperSlide className="swiper-container">
              <img
                className="swiper-habitaciones"
                src={sextuD2}
                alt="Habitacion séxtuple"
                onClick={handleShow}
                name={
                  "escritorio de trabajo, Personal Bar, Batas y pantuflas, Smart TV, Teléfono inalámbrico, Cafetera"
                }
              />
              <section className="swiper-itemsText">
                <h5 className="swiper-h4">Séxtuple</h5>
              </section>
            </SwiperSlide>
          </Swiper>
        </section>
        
        {/* MODAL DE IMAGENES */}
        <Modal
          show={show}
          onHide={handleClose}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title>{tipoHabi}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img src={imgHab} alt={tipoHabi} className="modal-img"/>
            <p>{description}</p>
          </Modal.Body>
        </Modal>
        
        
      {/*SECTOR DE SERVICIOS*/}
      <section className="container-linea margin">
        <h1 className="habi-h1">Servicios</h1>
        <hr className="linea1"></hr>
      </section>      
      <article className="servicios-container">
            <section className="parrafo">
              Contamos con desayuno americano incluido en nuestro comedor, sala de conferencias, sala de estar con juegos
              de mesa, mesa de billar, videojuegos y sillones muy comodos.
            </section>
            <Swiper 
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper swiper-margin"
            >
            <SwiperSlide className="swiper-container">
                <img
                  className="swiper-habitaciones"
                  src={desayuno}
                  alt="Servicio de desayuno"
                  onClick={handleShow}
                  name={
                    "escritorio de trabajo, Personal Bar, Batas y pantuflas, Smart TV, Teléfono inalámbrico, Cafetera"
                  }
                />
              </SwiperSlide>
              <SwiperSlide className="swiper-container">
                <img
                  className="swiper-habitaciones"
                  src={pasillo}
                  alt="Sectores comunes"
                  onClick={handleShow}
                  name={
                    "escritorio de trabajo, Personal Bar, Batas y pantuflas, Smart TV, Teléfono inalámbrico, Cafetera"
                  }
                />
              </SwiperSlide>
              <SwiperSlide className="swiper-container">
                <img
                  className="swiper-habitaciones"
                  src={pasillo2}
                  alt="Sectores comunes"
                  onClick={handleShow}
                  name={
                    "escritorio de trabajo, Personal Bar, Batas y pantuflas, Smart TV, Teléfono inalámbrico, Cafetera"
                  }
                />
              </SwiperSlide>
              <SwiperSlide className="swiper-container">
                <img
                  className="swiper-habitaciones"
                  src={sala}
                  alt="Sala de conferencia"
                  onClick={handleShow}
                  name={
                    "escritorio de trabajo, Personal Bar, Batas y pantuflas, Smart TV, Teléfono inalámbrico, Cafetera"
                  }
                />
              </SwiperSlide>
              <SwiperSlide className="swiper-container">
                <img
                  className="swiper-habitaciones"
                  src={sala2}
                  alt="Sala de conferencia"
                  onClick={handleShow}
                  name={
                    "escritorio de trabajo, Personal Bar, Batas y pantuflas, Smart TV, Teléfono inalámbrico, Cafetera"
                  }
                />
              </SwiperSlide>
            </Swiper>
        </article>
      </main>
        
    </>
  );
};

export default GaleriaHabit;
