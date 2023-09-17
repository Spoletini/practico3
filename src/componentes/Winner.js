import React from 'react';

function Winner({ winner }) {
  return (
    <p id="winner-message">
      {winner && `${winner.toUpperCase()} gana el juego.`}
    </p>
  );
}

export default Winner;