import './App.css';
import Testimonio from './componentes/Testimonio';


function App() {
  return (
    <div className="App">
      <div className="contenedor-principal">
        <h1>Los tres mas fuertes</h1>
        <Testimonio 
          nombre='Monkey D. Luffy'
          imagen='luffy'
          pais='East Blue'
          cargo='Capitán'
          testimonio='¡Voy a convertirme en el Rey de los Piratas! ¡Lo juro por mi propio orgullo y por los sueños de mis amigos! ¡Nunca retrocederé ni me rendiré hasta que haya alcanzado el One Piece y haya conquistado los mares!' />
        
        <Testimonio
          nombre='Portgas D. Ace'
          imagen='ace'
          pais='East Blue'
          cargo='Comandante'
          testimonio='Voy a vivir libre y sin arrepentimientos. Defenderé a mis amigos y seguiré mi propio camino, desafiando cualquier obstáculo con pasión y determinación. Mi fuego arderá siempre brillante, iluminando el camino hacia un futuro mejor para todos.' />

        <Testimonio
          nombre='Jean-Philippe Sabo'
          imagen='sabo'
          pais='East Blue'
          cargo='Emperador'
          testimonio='Lucharé por la libertad y la justicia, protegiendo a mis seres queridos y luchando contra la opresión. Siempre seguiré mi camino con valentía y determinación, buscando un mundo donde todos puedan vivir en paz y felicidad.' />

      </div>
    </div>
  );
}

export default App;
