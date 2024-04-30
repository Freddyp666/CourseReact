import './App.css';
import logoCalculadora from './imagenes/logoCalculadora.jpg';
import Boton from './componentes/Boton';

function App() {
  return (
    <div className="App">
      <div className='logo-contenedor'>
        <img
          className='logo'
          src={logoCalculadora}
          alt='Logo de Calculadora'
          with = '100px'
          height = '100px'
        />  
      </div>

      <div className='calculadora-contenedor'>
        <div className='fila'>
          <Boton>1</Boton>
          <Boton>+</Boton>
        </div>
        <div className='fila'></div>
        <div className='fila'></div>
        <div className='fila'></div>
        <div className='fila'></div>
      </div>
    </div>
  );
}

export default App;
