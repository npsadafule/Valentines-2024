import React, { useState, useRef } from 'react';
import './App.css'; 

function App() {
  const [clickCount, setClickCount] = useState(0); // Track number of times "No" has been clicked
  const [buttonLabel, setButtonLabel] = useState("No"); // Initial button label
  const noBtnRef = useRef(null); // Reference to the "No" button

  // Array of messages for each click, up to 10
  const messages = [
    "Why not??",
    "Seriously?",
    "Please reconsider.",
    "Not even for a coffee?",
    "Are you sure?",
    "Think again!",
    "But why?",
    "Let's give it a try!",
    "Just this once?",
    "Last chance, I promise!"
  ];

  const handleNoClick = () => {
    if (noBtnRef.current) {
      // Introduce a safe margin to account for any additional space needed (like padding/margin)
      const safeMargin = 5; 

      const maxX = window.innerWidth - noBtnRef.current.offsetWidth - safeMargin;
      const maxY = window.innerHeight - noBtnRef.current.offsetHeight - safeMargin;

      const randomX = Math.floor(Math.random() * maxX) + safeMargin;
      const randomY = Math.floor(Math.random() * maxY) + safeMargin;

      noBtnRef.current.style.position = 'fixed'; // Use 'fixed' to ensure it's relative to the viewport
      noBtnRef.current.style.left = `${randomX}px`;
      noBtnRef.current.style.top = `${randomY}px`;
    }

    // Update the button label if click count is less than 10
    if (clickCount < messages.length) {
      setButtonLabel(messages[clickCount]);
      setClickCount(clickCount + 1);
    }
  };

  return (
    <div className="App" style={{ textAlign: 'center', padding: '10vh 5%' }}>
      <h1>🥰 Would you like to go on a date with me? 🥰</h1>
      <div>
        <button onClick={() => alert('Yes! 😊')}>Yes</button>
        <button
          ref={noBtnRef}
          onClick={handleNoClick}
        >
          {buttonLabel}
        </button>
      </div>
    </div>
  );
}

export default App;
