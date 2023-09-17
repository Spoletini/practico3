
import React from 'react';

function Scoreboard({ playerScore, computerScore }) {
  return (
    <div id="results">
      <p id="player-score">Jugador: {playerScore}</p>
      <p id="computer-score">PC: {computerScore}</p>
    </div>
  );
}

export default Scoreboard;
