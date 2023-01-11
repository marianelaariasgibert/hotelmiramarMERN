import React from "react";
import "./bodyRandom.css";

const Maps = () => {
  return (
    <>
      <article className="maps">
        <h5 className="maps-H5 main-parra_p">Encontranos en Bv. Illia 150</h5>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3404.730561556313!2d-64.18640218503573!3d-31.42154878140243!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9432a28539a4e1e5%3A0xf9fd80d6f776d7c0!2sBv%20Pte.%20Umberto%20Arturo%20Illia%20150%2C%20X5000ASO%20C%C3%B3rdoba!5e0!3m2!1ses-419!2sar!4v1673305295591!5m2!1ses-419!2sar"
          title="map"
          height="300"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </article>
    </>
  );
};

export { Maps };
