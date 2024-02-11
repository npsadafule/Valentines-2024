import React, { useState, useRef } from 'react';

function Question({ onYesClick, onNoClick, noButtonLabel }) {
  const noBtnRef = useRef(null);
  // Assuming you've placed the downloaded GIFs in the public folder
  const catYesURL = `${process.env.PUBLIC_URL}/catyes.gif`; // Adjust the path if necessary
  const catNoURL = `${process.env.PUBLIC_URL}/catno.gif`; // Adjust the path if necessary

  const [currentImage, setCurrentImage] = useState(catYesURL);

  const handleNoClick = () => {
    onNoClick(noBtnRef);
    setCurrentImage(catNoURL);
    setTimeout(() => {
      setCurrentImage(catYesURL);
    }, 2000); // Change back to catYesURL after 2 seconds
  };

  return (
    <>
      <img src={currentImage} alt="Cat" className="cat-image"/>
      <h1 className="valentine">🥰 Will you be my Valentine? 🥰</h1>
      <div>
        <button onClick={onYesClick}>Yes</button>
        <button ref={noBtnRef} onClick={handleNoClick}>
          {noButtonLabel}
        </button>
      </div>
    </>
  );
}

export default Question;
