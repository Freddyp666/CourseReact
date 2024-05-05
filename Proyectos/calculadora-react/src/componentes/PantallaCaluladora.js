import React from "react";
import "../boton-de-estilos/Pantalla.css";


const PantallaCalculadora = ({input}) => {
  return (
    <div className="input">
      {input}
    </div>
  );
};

export default PantallaCalculadora;