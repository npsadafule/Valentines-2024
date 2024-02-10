// Question.js

import React, { useRef } from 'react';

function Question({ onYesClick, onNoClick, noButtonLabel }) {
  const noBtnRef = useRef(null);

  return (
    <>
      <h1 class="valentine">🥰 Will you be my Valentine? 🥰</h1>
      <div>
        <button onClick={onYesClick}>Yes</button>
        <button
          ref={noBtnRef}
          onClick={() => onNoClick(noBtnRef)}
        >
          {noButtonLabel}
        </button>
      </div>
    </>
  );
}

export default Question;
