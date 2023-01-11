import React from "react";
import { AiOutlineClockCircle } from "react-icons/ai";
import { FiMapPin } from "react-icons/fi";
import { MdBed } from "react-icons/md";
import "./bodyRandom.css";

const Icons = () => {
  return (
    <main>
      <div className="icons">
        <section className="section-icons">
          <h1>
            <AiOutlineClockCircle />
          </h1>
          <p className="section-icon_p">
            Atencion 24 hrs.
          </p>
        </section>
        <section className="section-icons">
          <h1>
            <FiMapPin />
          </h1>
          <p className="section-icon_p">
            Ubicado en el centro de la ciudad.
          </p>
        </section>
        <section className="section-icons">
          <h1>
            <MdBed />
          </h1>
          <p className="section-icon_p">
            De 1 a 6 huepedes por habitación.
          </p>
        </section>
      </div>
    </main>
  );
};

export { Icons };
