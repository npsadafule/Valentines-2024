// App.js

import React, { useState, useEffect } from 'react';
import './App.css';
import Question from './Question';
import Message from './Message';
import Confetti from 'react-confetti';

function App() {
  const [clickCount, setClickCount] = useState(0);
  const [buttonLabel, setButtonLabel] = useState("No");
  const [showMessage, setShowMessage] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [fadeOutConfetti, setFadeOutConfetti] = useState(false);

  useEffect(() => {
    if (fadeOutConfetti) {
      const timer = setTimeout(() => {
        setShowConfetti(false);
        setFadeOutConfetti(false);
      }, 3000); 
      return () => clearTimeout(timer);
    }
  }, [fadeOutConfetti]);

  const messages = [
    "Why not?? 🤔",
    "Are you sure? 🧐",
    "No love for cat gifs? 🐱💔",
    "Really sure? 🤨",
    "Seriously? 😒",
    "Are we not purr-fect together? 🐾❤️",
    "Give us a chance? 🥺👉👈",
    "Is it something I said? 🗣️😟",
    "Can we start over? 🔄❤️",
    "Are you playing hard to get? 🔍",
    "Swiping left on us? 💔👈",
    "Think again! 🔄",
    "Please reconsider. 🙏",
    "Not even for a coffee? ☕️",
    "Surely not? 🚫",
    "But why? 🤔💭",
    "Have a heart! ❤️",
    "Don't be so cold! ❄️",
    "Let's give it a try! 🤝",
    "Just this once? 🙇‍♂️",
    "Last chance! ⏳",
    "You're breaking my heart 😭💔",
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
    setShowConfetti(true);
    setTimeout(() => setFadeOutConfetti(true), 3000); 
  };

  return (
    <div className="App">
      {showConfetti && (
        <div className={fadeOutConfetti ? 'fadeOut' : ''}>
          <Confetti />
        </div>
      )}
      <header>
        <h1 class="v2024">Valentine's Day 2024</h1>
      </header>
      <main>
        {!showMessage ? (
          <Question 
            onYesClick={handleYesClick} 
            onNoClick={handleNoClick} 
            noButtonLabel={buttonLabel}
          />
        ) : (
          <Message />
        )}
      </main>
      <footer>
        <p class="neel">Created by: Neel Sadafule</p>
      </footer>
    </div>
  );
}

export default App;
