import { useEffect, useState } from 'react';
import './App.css';
import { generateHexColor } from './utils/hexGenerator.js';

function App() {
  const [squareColor, setSquareColor] = useState("");
  const [buttonArray, setButtonArray] = useState([]);
  const [correctButtonIndex, setCorrectButtonIndex] = useState(null);
  const [message, setMessage] = useState('');

  useEffect(() => {
    generateNewGame();
  }, []);

  function generateNewGame() {
    const color = generateHexColor();
    const buttonIndex = Math.floor(Math.random() * 3);
    const buttonArray = [];
    
    for (let i = 0; i < 3; i++) {
        if (i === buttonIndex) {
          buttonArray.push(color);
        } else {
          let randomColor = generateHexColor();
           while (randomColor === color || buttonArray.includes(randomColor)) randomColor = generateHexColor();
           buttonArray.push(randomColor);
        }
      }
    setSquareColor(color);
    setButtonArray(buttonArray);
    setCorrectButtonIndex(buttonIndex);
    setMessage('');
};

  function handleButtonClick(index) {
    if (index ===correctButtonIndex) {
      setMessage('Hooray you got it right! Get ready to play again in 3 seconds!');
      setTimeout(() => {
        generateNewGame();
      }, 3000);
    }
    else setMessage('Sorry you got it wrong :( - care to click again?');
  };

  function renderButtons() {
    return buttonArray.map((color, index) => (
      <button
        key={index}
        style={{ 
          backgroundColor: 'gray'
        }}
        onClick={() => handleButtonClick(index)}
      >
        {color}
      </button>
    ));
  };

  const styles = {
    width: '200px',
    height: '200px',
    backgroundColor: squareColor
  }

  return (
    <div>
      <div style = {styles}/>
      <p>Each button contains a hex color code - choose the one you think describes the colored box!!</p>  
      {renderButtons()}
        {message && <p>{message}</p>}
    </div>
  );
};

export default App;
