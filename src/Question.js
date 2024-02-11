import React, { useState, useRef, useEffect } from 'react';
import catYes from './catyes.jpeg'; // Make sure to import the images correctly
import catNo from './catno.jpeg';

function Question({ onYesClick, onNoClick, noButtonLabel }) {
  const noBtnRef = useRef(null);
  const [currentImage, setCurrentImage] = useState(catYes);

  const handleNoClick = () => {
    onNoClick(noBtnRef);
    setCurrentImage(catNo);
    setTimeout(() => {
      setCurrentImage(catYes);
    }, 2000); // Change back to catYes after 2 seconds
  };

  return (
    <>
      <img src={currentImage} alt="Cat" className="cat-image"/>
      <h1 className="valentine">🥰 Will you be my Valentine? 🥰</h1>
      <div>
        <button onClick={onYesClick}>Yes</button>
        <button
          ref={noBtnRef}
          onClick={handleNoClick}
        >
          {noButtonLabel}
        </button>
      </div>
    </>
  );
}

export default Question;
