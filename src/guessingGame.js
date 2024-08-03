import React, { useState, useEffect } from 'react';


const GuessingGame = () => {
  const [randomNumber, setRandomNumber] = useState(null);
  const [guess, setGuess] = useState('');
  const [message, setMessage] = useState('');
  const [attempts, setAttempts] = useState(0);

  useEffect(() => {
    generateRandomNumber();
  }, []);

  const generateRandomNumber = () => {
    const number = Math.floor(Math.random() * 100) + 1;
    setRandomNumber(number);
    setAttempts(0);
    setMessage('');
    setGuess('');
  };

  const handleGuessChange = (e) => {
    setGuess(e.target.value);
  };

  const handleGuessSubmit = () => {
    if (guess === '') {
      setMessage('Please enter a number.');
      return;
    }

    const userGuess = parseInt(guess, 10);
    setAttempts(attempts + 1);

    if (userGuess < randomNumber) {
      setMessage(`You guessed ${userGuess} that is Too low!`);
    } else if (userGuess > randomNumber) {
      setMessage(`You guessed ${userGuess} that is Too high!`);
    } else {
      setMessage(`Correct! You guessed the number in ${attempts + 1} attempts.`);
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px'}}>
      <h1>Guessing Game!</h1>
      <p>Guess a number between 1 and 100</p>
      <input
        type="number"
        value={guess}
        onChange={handleGuessChange}
        placeholder="Enter your guess"
      />
      <button onClick={handleGuessSubmit}>Submit Guess</button>
      <p>{message}</p>
      <button className='submit' onClick={generateRandomNumber}>Start a new game</button>
    </div>
  );
};

export default GuessingGame;
