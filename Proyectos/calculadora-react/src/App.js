import './App.css';
import logoCalculadora from './imagenes/logoCalculadora.jpg';
import Boton from './componentes/Boton';
import PantallaCalculadora from './componentes/PantallaCaluladora';
import BotonBorrar from './componentes/BotonBorrar'
import { useState } from 'react';


function App() {
  const [input, setInput] = useState('')

  const agregarInput = valor => {
    setInput(input + valor)
  }



  return (
    <div className="App">
      <div className='logo-contenedor'>
        <img
          className='logo'
          src={logoCalculadora}
          alt='Logo de Calculadora'
          with='100px'
          height='100px'
        />
      </div>

      <div className='calculadora-contenedor'>

        <PantallaCalculadora input={input} />

        <div className='fila'>
          <Boton manejarClic={agregarInput}>1</Boton>
          <Boton manejarClic={agregarInput}>2</Boton>
          <Boton manejarClic={agregarInput}>3</Boton>
          <Boton manejarClic={agregarInput}>+</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={agregarInput}>4</Boton>
          <Boton manejarClic={agregarInput}>5</Boton>
          <Boton manejarClic={agregarInput}>6</Boton>
          <Boton manejarClic={agregarInput}>-</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={agregarInput}>7</Boton>
          <Boton manejarClic={agregarInput}>8</Boton>
          <Boton manejarClic={agregarInput}>9</Boton>
          <Boton manejarClic={agregarInput}>*</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={agregarInput}>.</Boton>
          <Boton manejarClic={agregarInput}>0</Boton>
          <Boton manejarClic={agregarInput}>=</Boton>
          <Boton manejarClic={agregarInput}>/</Boton>
        </div>
        <div className='fila'>
          <BotonBorrar manejarClic={()=> setInput('')}>
            Limpiar
          </BotonBorrar>
        </div>
      </div>
    </div>
  );
}

export default App;
