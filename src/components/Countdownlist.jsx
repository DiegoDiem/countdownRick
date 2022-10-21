/* eslint-disable prettier/prettier */
import React, { useState, useEffect} from 'react'

const style={
  displayNone:{
    display:"none"
  }
}


function Countdownlist({setCountdown,setCountdown2, mes, dias, horas, minutos, name,img },) {


    const [dia, setDias] = useState("0")
    const [hora, setHoras] = useState("0")
    const [minuto, setMinutos] = useState("0")
    const [segundo, setSegundo] = useState("0")

    useEffect(()=>{
      // console.log(minutos);
      let mesNum = parseInt(mes)
      let diasNum = parseInt(dias)
      let minutosNum = parseInt(minutos)
      let horasNum = parseInt(horas)

      // console.log(minutosNum);
        //* Asignación de fecha en base a UTC +5 horas a la hora actual dividido por: año, mes-1, días, minutos, segundos
        let countdownDate = Date.UTC(2022, mesNum, diasNum, horasNum, minutosNum, 0)
        
        // let countdownDate = new Date("May 19, 2022 16:00:00").getTime()
        //? Actualiza cada seegundo
        let distance;

        let itv = setInterval( ()=> {
           //? Dias y tiempo
           let now = new Date().getTime() 

           //? Tiempo entre ahora y el countdown establecido

            distance = countdownDate - now;
            // console.log(distance)

           let days = Math.floor(distance / (1000 * 60 * 60 * 24));
           let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
           let minutes = Math.floor((distance% (1000 * 60 * 60)) / (1000 * 60))
           let seconds = Math.floor((distance % (1000 * 60)) / 1000);
           

          //  setTime(days + " : " + hours + " : " + minutes + " : " + seconds )

           setDias(days+'')
           setHoras(hours+'')
           setMinutos(minutes+'')
           setSegundo(seconds+'')

           
           if (distance < 0) {
            
              clearInterval(itv)
              
              setDias("")
              setHoras("")
              setMinutos("")
              setSegundo("")
              setCountdown(false)
              setCountdown2(true)
                     
           }

        },1000)

    },[])

  return (
    <div  style={dia==='' && hora==='' && minuto==='' && segundo===''? style.displayNone :  style.containerFlex} > 
      {/* <div style={style.div}>
        {time}
      </div>  */}
      <img src={`${img}`} alt="" />
      <p> {name} </p>
      <div > 
        <span >{dia}</span> : 
        <span  >{hora}</span> : 
        <span  >{minuto}</span> : 
        <span >{segundo}</span>
      </div>
      <div  >
        <span>Días</span> 
        <span>Horas</span> 
        <span >Minutos</span>
        <span>Segundos</span> 
      </div>
      
    </div>
  )
}



export default Countdownlist