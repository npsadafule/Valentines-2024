//Message.js

import React from 'react';
import './Message.css';

function Message({ onBackClick }) {
  return (
    <div className="message-container">
      <h2 className="love-message">Yayyy!!! 🥰</h2>
      <img 
        src="https://media1.giphy.com/media/iCVzZwwE6QNAV2tEE0/giphy.gif" 
        alt="Love Gif" 
        className="love-gif"
      />
      <button className="back-button" onClick={onBackClick}>Back</button>
    </div>
  );
}

export default Message;

