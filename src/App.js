// App.js
import React, { useState } from 'react';
import './App.css';
import Question from './Question';
import Message from './Message';

function App() {
  const [clickCount, setClickCount] = useState(0);
  const [buttonLabel, setButtonLabel] = useState("No");
  const [showMessage, setShowMessage] = useState(false);

  // Array of messages for each click, up to 10
  const messages = [
    "Why not??", "Seriously?", "Please reconsider.", "Not even for a coffee?",
    "Are you sure?", "Think again!", "But why?", "Let's give it a try!",
    "Just this once?", "Last chance, I promise!"
  ];

  const handleNoClick = (noBtnRef) => {
    const safeMargin = 5;
    const maxX = window.innerWidth - noBtnRef.current.offsetWidth - safeMargin;
    const maxY = window.innerHeight - noBtnRef.current.offsetHeight - safeMargin;

    const randomX = Math.floor(Math.random() * maxX) + safeMargin;
    const randomY = Math.floor(Math.random() * maxY) + safeMargin;

    noBtnRef.current.style.position = 'fixed';
    noBtnRef.current.style.left = `${randomX}px`;
    noBtnRef.current.style.top = `${randomY}px`;

    if (clickCount < messages.length) {
      setButtonLabel(messages[clickCount]);
      setClickCount(clickCount + 1);
    }
  };

  const handleYesClick = () => {
    setShowMessage(true);
  };

  return (
    <div className="App" style={{ textAlign: 'center', padding: '10vh 5%' }}>
      {!showMessage ? (
        <Question 
          onYesClick={handleYesClick} 
          onNoClick={handleNoClick} 
          noButtonLabel={buttonLabel}
        />
      ) : (
        <Message />
      )}
    </div>
  );
}

export default App;
