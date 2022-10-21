/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react';

const style = {
  displayNone: {
    display: 'none',
  },
};

function Countdownlist({ data }) {
  const [dia, setDias] = useState('00');
  const [hora, setHoras] = useState('00');
  const [minuto, setMinutos] = useState('00');
  const [segundo, setSegundo] = useState('00');

  const [count, setCount] = useState(0);
  const current = data[count] || null;

  useEffect(() => {
    if (data[count] && data[count].date) {
      const fecha = new Date(data[count].date);
      executeCountTimer(fecha.getTime());

      const intervalId = setInterval(() => {
        executeCountTimer(fecha.getTime());
      }, 1000);

      return () => {
        console.log('Clear.......');
        clearInterval(intervalId);
      };
    }
  }, [data,count]);

  const executeCountTimer = (date) => {
    const distance = date - new Date().getTime();
    if (distance > 0) {
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setDias(days < 10 ? `0${days}` : days + '');
      setHoras(hours < 10 ? `0${hours}` : hours + '');
      setMinutos(minutes < 10 ? `0${minutes}` : minutes + '');
      setSegundo(seconds < 10 ? `0${seconds}` : seconds + '');
    } else {
      setDias('00');
      setHoras('00');
      setMinutos('00');
      setSegundo('00');

      setCount((prev) => prev + 1);
    }
  };

  if (!current) {
    return '';
  }

  return (
    <div
      style={
        dia === '' && hora === '' && minuto === '' && segundo === ''
          ? style.displayNone
          : style.containerFlex
      }
    >
      {/* <div style={style.div}>
        {time}
      </div>  */}
      <img src={current.image} alt="" />
      <p> {current.name} </p>
      <div>
        <span>{dia}</span> :<span>{hora}</span> :<span>{minuto}</span> :
        <span>{segundo}</span>
      </div>
      <div>
        <span>Días</span>
        <span>Horas</span>
        <span>Minutos</span>
        <span>Segundos</span>
      </div>
    </div>
  );
}

export default Countdownlist;
