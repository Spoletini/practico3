import './GameOptions.css';
import React from 'react';
import piedra from './piedra.jpg';
import papel from './papel.jpg';
import tijera from './tijera.jpg';

function GameOptions({ onPlayerChoice }) {
  return (
    
    <div id="game-options">
      <button onClick={() => onPlayerChoice('piedra')}>
        <img src={tijera} alt="Piedra" />
      </button>
      <button onClick={() => onPlayerChoice('papel')}>
        <img src={papel} alt="Papel" />
      </button>
      <button onClick={() => onPlayerChoice('tijera')}>
        <img src={tijera} alt="Tijera" />
      </button>
    </div>
  );
}

export default GameOptions;


