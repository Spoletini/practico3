import React from 'react';

function Greeting({ playerName }) {
  return (
    <div id="greeting-message">
      <p>Bienvenido, {playerName}, en este juego,.</p>
    </div>
  );
}

export default Greeting;
