import { useState, useEffect } from 'react';
import Countdown from './components/Countdownlist';

import data from './data.json';

function App() {
  const [character, setCharacter] = useState([]);

  useEffect(() => {
    const cotizarCripto = async () => {
      setCharacter(data);

      // const url = `https://rickandmortyapi.com/api/character`;
      // const respuesta = await fetch(url);
      // const resultado = await respuesta.json();
    };

    cotizarCripto();
  }, []);
console.log(character);
  return (
    <div>
      <Countdown data={character} />
    </div>
  );
}

export default App;
