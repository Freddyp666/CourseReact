import React from "react";
import '../stylesheet/Testimonio.css'


function Testimonio(props) {
  return (
    <div className='contenedor-testimonio'>
      <img
        className='imagen-testimonio'
        src={require(`../imagenes/vida-${props.imagen}.jpg`)}
        alt={`Imagen de ${props.nombre}`}
      />
      <div className="contenedor-text-testimonio">
        <p className="nombre-testimonio"><strong>{props.nombre}</strong> de {props.pais} </p>
        <p className="cargo-testimonio">{props.cargo} en <strong>RedLine</strong></p>
        <p className="texto-testimonio">{props.testimonio}</p>
      </div>
    </div>
  );
}

export default Testimonio;
