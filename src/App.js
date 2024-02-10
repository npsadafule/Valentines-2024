import React, { useState } from 'react';
import './App.css'; // Ensure you have this CSS file in your project

function App() {
  const [buttonPosition, setButtonPosition] = useState({ top: '50%', left: '50%' });

  const handleNoClick = () => {
    // Calculate new position within the viewport bounds
    // Adjusting for estimated button size to ensure it remains fully visible
    const buttonSize = { width: 100, height: 40 }; // Adjust based on your actual button size
    const newPosition = {
      top: `${Math.random() * (window.innerHeight - buttonSize.height) + (buttonSize.height / 2)}px`,
      left: `${Math.random() * (window.innerWidth - buttonSize.width) + (buttonSize.width / 2)}px`,
    };
    setButtonPosition(newPosition);
  };

  return (
    <div className="App" style={{ textAlign: 'center', padding: '10vh 5%' }}>
      <h1>Do you want to go out with me?</h1>
      <div>
        <button onClick={() => alert('Yes! 😊')}>Yes</button>
        <button
          style={{ 
            position: 'fixed', // Ensures the button stays within the viewport
            top: buttonPosition.top, 
            left: buttonPosition.left,
            transform: 'translate(-50%, -50%)', // Centers the button at its new position
            // Ensuring button is accessible and visible
          }}
          onClick={handleNoClick} // Moves the button on click, suitable for both desktop and mobile
        >
          No
        </button>
      </div>
    </div>
  );
}

export default App;
