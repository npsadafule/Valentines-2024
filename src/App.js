import React, { useState, useEffect } from 'react';
import './App.css'; // Ensure you have this CSS file in your project

function App() {
  const [buttonPosition, setButtonPosition] = useState({ top: '50%', left: '50%' });
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Function to check if the device is a touch device
    function detectTouchDevice() {
      setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0);
    }

    // Check once on component mount
    detectTouchDevice();
  }, []);

  const handleNoInteraction = () => {
    const newPosition = {
      top: `${Math.random() * (window.innerHeight - 60) + 30}px`,
      left: `${Math.random() * (window.innerWidth - 60) + 30}px`,
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
            position: 'fixed', 
            top: buttonPosition.top, 
            left: buttonPosition.left,
            transform: 'translate(-50%, -50%)',
          }}
          onMouseOver={!isTouchDevice ? handleNoInteraction : null}
          onClick={isTouchDevice ? handleNoInteraction : null}
        >
          No
        </button>
      </div>
    </div>
  );
}

export default App;
