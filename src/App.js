
import './App.css';
import Greeting from './componentes/Greeting';
import GameOptions from './componentes/GameOptions';
import Scoreboard from './componentes/Scoreboard';
import Result from './componentes/Result';
import Winner from './componentes/Winner';
import React, { useState, useEffect } from 'react';

function App() {
  const [playerChoice, setPlayerChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [roundResult, setRoundResult] = useState('');
  const [playerScore, setPlayerScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);
  const [winner, setWinner] = useState(null);
  const [playerName, setPlayerName] = useState('');
  const [showWelcome, setShowWelcome] = useState(true);
  const [attempts, setAttempts] = useState(0);
  const choices = ['piedra', 'papel', 'tijera'];




  useEffect(() => {
    if (playerScore === 5 || computerScore === 5 || attempts === 5) {
      // Determina al ganador aquí
      let winner;
      if (playerScore === 5) {
        winner = playerName;
      } else if (computerScore === 5) {
        winner = 'PC';
      } else {
        winner = playerScore > computerScore ? playerName : 'PC';
      }
      setWinner(winner);
    }
  }, [playerScore, computerScore, attempts, playerName]);
  
  
  
  const handlePlayerChoice = (choice) => {
    if (attempts >= 5 || winner !== null) {
      // Evitar que el jugador haga elecciones si el juego ha terminado o si ya se hicieron 5 intentos
      return;
    }

    // Resto de tu código para manejar la elección del jugador
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    setPlayerChoice(choice);
    setComputerChoice(computerChoice);
  
    const result = determineWinner(choice, computerChoice);
    setRoundResult(result);
  
    if (result === 'jugador') {
      setPlayerScore(playerScore + 1);
    } else if (result === 'pc') {
      setComputerScore(computerScore + 1);
    }
  
    // Incrementa el contador de intentos
    setAttempts(attempts + 1);
  };

  const determineWinner = (player, pc) => {
    if (player === pc) {
      return 'empate';
    } else if (
      (player === 'piedra' && pc === 'tijera') ||
      (player === 'papel' && pc === 'piedra') ||
      (player === 'tijera' && pc === 'papel')
    ) {
      return 'jugador';
    } else {
      return 'pc';
    }
  };
  

  const restartGame = () => {
    setPlayerChoice(0);
    setComputerChoice(0);
    setRoundResult('');
    setPlayerScore(0);
    setComputerScore(0);
    setWinner(null);
    setShowWelcome(true);
    setPlayerName('');
    setAttempts(0);
  };

  const handleNameSubmit = (e) => {
    e.preventDefault();
    setShowWelcome(false);
  };

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
        </div>
      ) : (
        <>
          <Greeting playerName={playerName} />
          <GameOptions onPlayerChoice={handlePlayerChoice} />
          <Scoreboard playerScore={playerScore} computerScore={computerScore} />
          <Result result={roundResult} />
          <Winner winner={winner} />
          {winner && (
            <button onClick={restartGame}>Reiniciar Juego</button>
          )}
        </>
      )}
    </div>
  );
}

export default App;