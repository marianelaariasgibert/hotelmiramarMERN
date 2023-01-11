import React from "react";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper";

//HABITACIONES IMG
import single from '../images/single.jpg'
import habDoble from '../images/doble.png'
import habTriple from '../images/triple.png'
import cuadruHabi from '../images/cuadruple.png'
import quintupleHabi from '../images/quintuple.png'
import sextuHabi from '../images/sextuple.jpg'
import "swiper/css/effect-cards";
import { Router, Routes, Route, Link } from "react-router-dom";
import { HabitacionesYs } from "../../pages";
import "./style.css";

const Card = () => {
  return (
    <>
      <main className="cards-container">
        <header className="container-linea margin">
          <h1 className="habi-h1">Habitaciones</h1>
          <hr className="linea1"></hr>
        </header>
        <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="swiper-cont_size"
        > 
          <SwiperSlide className="swip-slide shadow-swip"> 
            <img src={single} alt="Habitacion-single" className="swiper-habitaciones"/>
            <section className="swip-items">
              <h4>Habitacion simple</h4>
              <button className="btn-ver">
                <Link to="/habitacionesYs" className="btn-item">
                  Ver más
                </Link>
              </button>
              <Routes>
                <Route path="/habitacionesYs" element={<HabitacionesYs />} />
              </Routes>
            </section>
          </SwiperSlide>
          <SwiperSlide className="swip-slide shadow-swip">
            <img src={habDoble} alt="Habitacione-doble"  className="swiper-habitaciones"/>
            <section className="swip-items">
              <h4>Habitacion doble</h4>
              <button className="btn-ver">
                <Link to="/habitacionesYs" className="btn-item">
                  Ver más
                </Link>
              </button>
              <Routes>
                <Route path="/habitacionesYs" element={<HabitacionesYs />} />
              </Routes>
            </section>
          </SwiperSlide>
          <SwiperSlide className="swip-slide shadow-swip">
            <img src={habTriple} alt="habitacione-triple"  className="swiper-habitaciones" />
            <section className="swip-items">
              <h4>Habitacion triple</h4>
              <button className="btn-ver">
                <Link to="/habitacionesYs" className="btn-item">
                  Ver más
                </Link>
              </button>
              <Routes>
                <Route path="/habitacionesYs" element={<HabitacionesYs />} />
              </Routes>
            </section>
          </SwiperSlide>
          <SwiperSlide className="swip-slide shadow-swip">
            <img src={cuadruHabi} alt="habitacione-cuádruple"  className="swiper-habitaciones"/>
            <section className="swip-items">
              <h4>Habitacion cuádruple</h4>
              <button className="btn-ver">
                <Link to="/habitacionesYs" className="btn-item">
                  Ver más
                </Link>
              </button>
              <Routes>
                <Route path="/habitacionesYs" element={<HabitacionesYs />} />
              </Routes>
            </section>
          </SwiperSlide>
          <SwiperSlide className="swip-slide shadow-swip">
            <img src={quintupleHabi} alt="habitaciones"  className="swiper-habitaciones"/>
            <section className="swip-items">
              <h4>Habitacion quíntuple</h4>
              <button className="btn-ver">
                <Link to="/habitacionesYs" className="btn-item">
                  Ver más
                </Link>
              </button>
              <Routes>
                <Route path="/habitacionesYs" element={<HabitacionesYs />} />
              </Routes>
            </section>
          </SwiperSlide>
          <SwiperSlide className="swip-slide shadow-swip">
            <img src={sextuHabi} alt="habitacione-séxtuple"  className="swiper-habitaciones"/>
            <section className="swip-items">
              <h4>Habitacion séxtuple</h4>
              <button className="btn-ver">
                <Link to="/habitacionesYs" className="btn-item">
                  Ver más
                </Link>
              </button>
              <Routes>
                <Route path="/habitacionesYs" element={<HabitacionesYs />} />
              </Routes>
            </section>
          </SwiperSlide>
        </Swiper>
      </main>
    </>
  );
};

export { Card };
