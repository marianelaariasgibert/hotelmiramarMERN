import "./App.css";
import NavBar from "./components/Nav/NavBar";
import { Home, HabitacionesYs, Contacto } from "./pages";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Helmet} from "react-helmet";
import { useRef, useState } from "react";

function App() {
  const [colorMenu, setColorMenu] = useState(false)  
  
  return (
    <div className="App">
      <Helmet>
        <title>Hotel Miramar</title>
        <meta name="author" content="Arias Gibert Marianela" />
        <meta name="description" content="En el Hotel Miramar ofrecemos a los huéspedes, un espacio de descanso, confort y excelente nivel de servicio, el mismo esta bicado en pleno centro de la Ciudad de Cordoba" />
        <meta name="keywords" content="Hotel Miramar, Cordoba, capital, descanso, confort, vacaciones"></meta>
      </Helmet>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home setColorMenu={setColorMenu}/>} />
        <Route path="/habitacionesYs/*" element={<HabitacionesYs/>} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
    </div>
  );
}

export default App;
