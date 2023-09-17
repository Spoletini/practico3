
import React, { useState, useEffect } from 'react';


  const choices = ['piedra', 'papel', 'tijera'];



  return (
    <div className="App">
      <h1>Piedra, Papel o Tijera</h1>
  
      {showWelcome ? (
        <div id="welcome-form">
          <p>Bienvenido al juego. Ingresa tu nombre para comenzar:</p>
          <form onSubmit={handleNameSubmit}>
            <input
              type="text"
              placeholder="Tu Nombre"
              value={playerName}
              onChange={(e) => setPlayerName(e.target.value)}
            />
            <button type="submit">Comenzar Juego</button>
           
          </form>
        
  );
}

export default App;
