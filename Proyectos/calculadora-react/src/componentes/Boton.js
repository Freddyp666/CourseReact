import React from 'react';
import '../boton-de-estilos/boton.css';

function Boton(props) {

  const esOperador = valor => {
    return !isNaN(valor) && (valor!== '.' ) && (valor !== '=');
  };

  return (
    <div className={`boton-contenedor ${esOperador(props.children)? 'operador': ''}`.trimEnd()}>
      {props.children}
    </div>
  );
}

export default Boton;