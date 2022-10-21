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

  const hora1 = "18"
  const hora2 = "18"
  const hora3 = "18"

  const min1 = "3"
  const min2 = "6"
  const min3 = "8"

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


  let render1;
  let render2;
  let render3;

  let countDownDate1 = Date.UTC(2022, mes, dia1, hora1, min1, 0)
  let countDownDate2 = Date.UTC(2022, mes, dia2, hora2, min2, 0)
  let countDownDate3 = Date.UTC(2022, mes, dia3, hora3, min3, 0)

  let distance1;
  let distance2;
  let distance3;

  let now = new Date().getTime();

  distance1 = countDownDate1 - now;
  distance2 = countDownDate2 - now;
  distance3 = countDownDate3 - now;

  if (distance1 > 0 && distance1 < distance2 && distance1 < distance3) {
    render1 = <>
      <Countdownlist
        setCountdown={setCountdown}
        setCountdown2={setCountdown2}
        mes={mes}
        dias={dia1}
        horas={hora1}
        minutos={min1}
        name={caracter1?.name}
        img={caracter1?.image}
      />
    </>
  }else if (distance2 > 0 && distance2 > distance1 && distance2 < distance3) {
    render2 = <>
      <Countdownlist
        setCountdown={setCountdown2}
        setCountdown2={setCountdown3}
        mes={mes}
        dias={dia2}
        horas={hora2}
        minutos={min2}
        name={caracter2?.name}
        img={caracter2?.image}
      />
    </>
  }else if (distance3 > 0 && distance3 > distance1 && distance3 > distance2) {
    render3 = <>
      <Countdownlist
        setCountdown={setCountdown2}
        setCountdown2={setCountdown3}
        mes={mes}
        dias={dia3}
        horas={hora3}
        minutos={min3}
        name={caracter3?.name}
        img={caracter3?.image}
      />
    </>
  }




  return (

    <div >
      {/* contador1 */}
      {render1}

      {/* contador 2 */}
      {render2}

      {/* contador 3 */}
      {render3}
    </div>
  )
}

export default App
