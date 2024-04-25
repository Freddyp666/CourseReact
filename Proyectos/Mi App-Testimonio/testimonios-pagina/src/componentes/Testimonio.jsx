import React from "react";


function Testimonio() {
  return (
    <div className='contenedor-testimonio'>
      <img
        className='imagen-testimonio'
        src={require('../imagenes/luffy3.jpg')}
        alt='Foto de lufy 3' />

      <div className="contenedor-text-testimonio">
        <p className="nombre-testimonio">Monkey D Luffy</p>
        <p className="cargo-testimonio">Navegador en GrandLine</p>
        <p className="texto-testimonio">
          Gear Third es una técnica de combate de Monkey D. Luffy en "One Piece". Consiste en inflar sus huesos para aumentar su tamaño y fuerza. Aunque poderosa, reduce su velocidad y movilidad. Es clave en batallas difíciles.</p>
      </div>
    </div>
  );
}

export default Testimonio;
