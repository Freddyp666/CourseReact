import './App.css';
import logoDeClics from './imagenes/cps-test.png'
import Boton from './componentes/Boton';
import Contador from './componentes/contador';
import { useState } from 'react';

function App() {

  const [numClics, setNumClics] = useState(0);


  const manejarClic = () => {
    setNumClics(numClics + 1);
    
    console.log('Clic');

  };

  const reinicairContador = () => {
    setNumClics(0);

    console.log('Reiniciar');
  };


  return (
    <div className="App">
      <div className='logo-contenedor'>
        <img
          className='logo'
          src={logoDeClics}
          alt='Logo de Contador de Clics'
        />
      </div>
      <div className='contenedor-principal'>
        <Contador
          numClics={numClics}
        />
        <Boton
          texto='Clic'
          esBotonDeClic={true}
          manejarClic={manejarClic} />

        <Boton
          texto='Reiniciar'
          esBotonDeClic={false}
          manejarClic={reinicairContador} />

      </div>
    </div>
  );
}

export default App;
