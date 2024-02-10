//Message.js

import React from 'react';
import './Message.css';

function Message() {
  return (
    <div className="message-container">
      <h2 className="love-message">Yayyy!!!😘</h2>
      <img 
        src="https://media1.giphy.com/media/iCVzZwwE6QNAV2tEE0/giphy.gif" 
        alt="Love Gif" 
        className="love-gif"
      />
    </div>
  );
}

export default Message;
