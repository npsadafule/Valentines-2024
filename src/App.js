import React, { useState } from 'react';
import './App.css'; // Ensure you have this CSS file in your project

function App() {
  const [buttonPosition, setButtonPosition] = useState({ top: '50%', left: '50%' });
  const [clickCount, setClickCount] = useState(0); // Track number of times "No" has been clicked
  const [buttonLabel, setButtonLabel] = useState("No"); // Initial button label

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
    // Adjusted to ensure the button stays within the viewport
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    const buttonWidth = 120; // Adjust based on your actual button size
    const buttonHeight = 40; // Adjust based on your actual button size
    const newPosition = {
      left: `${Math.random() * (viewportWidth - buttonWidth)}px`,
      top: `${Math.random() * (viewportHeight - buttonHeight)}px`,
    };
    setButtonPosition(newPosition);

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
          style={{ 
            position: 'fixed', 
            top: buttonPosition.top, 
            left: buttonPosition.left,
            transform: 'translate(-50%, -50%)',
          }}
          onClick={handleNoClick}
        >
          {buttonLabel}
        </button>
      </div>
    </div>
  );
}

export default App;
