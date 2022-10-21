import { useState, useEffect } from 'react'
import Countdownlist from './components/Countdownlist'

function App() {

  const [caracter1, useCaracter1] = useState()
  const [caracter2, useCaracter2] = useState()
  const [caracter3, useCaracter3] = useState()

  const mes = "9"
  const dia1 = "21"
  const dia2 = "21"
  const dia3 = "21"

  const hora1 = "17"
  const hora2 = "17"
  const hora3 = "17"

  const min1 = "46"
  const min2 = "49"
  const min3 = "55"

  const [countdown, setCountdown] = useState(true)
  const [countdown2, setCountdown2] = useState(false)
  const [countdown3, setCountdown3] = useState(false)


  useEffect(() => {
    const cotizarCripto = async () => {

      // useCaracters({})
      const url = `https://rickandmortyapi.com/api/character`;
      const respuesta = await fetch(url);
      const resultado = await respuesta.json();
      // console.log(resultado)
      useCaracter1(resultado.results[0]);
      useCaracter2(resultado.results[1]);
      useCaracter3(resultado.results[2]);

    }

    cotizarCripto()

  }, [])
  console.log(caracter1)
  console.log(caracter2)
  console.log(caracter3)


  return (

    <div >
      {/* contador1 */}
      {countdown ?
        <Countdownlist
          setCountdown={setCountdown}
          setCountdown2={setCountdown2}
          mes={mes}
          dias={dia1}
          horas={hora1}
          minutos={min1}
          name={caracter1?.name}
          img={caracter1?.image}
        /> : <></>}

        {/* contador 2 */}
      {countdown2 ?
        <Countdownlist
          setCountdown={setCountdown2}
          setCountdown2={setCountdown3}
          mes={mes}
          dias={dia2}
          horas={hora2}
          minutos={min2}
          name={caracter2?.name}
          img={caracter2?.image}
        /> : <></>}

        {/* contador 3 */}
      {countdown3 ?
        <Countdownlist
          setCountdown={setCountdown2}
          setCountdown2={setCountdown3}
          mes={mes}
          dias={dia3}
          horas={hora3}
          minutos={min3}
          name={caracter3?.name}
          img={caracter3?.image}
        /> : <></>}
    </div>
  )
}

export default App
