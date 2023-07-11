import React, { useState } from 'react';

function Content() {
    const [displayText, setDisplayText] = useState('');
  
    const handleButtonClick = () => {
      setDisplayText(document.getElementById('textarea').value);
    };
  
    return (
      <div className="flex flex-col items-center">
        <textarea
          id="textarea"
          className="border border-gray-300 rounded-lg p-10 mb-4"
          rows="4"
          cols="50"
          placeholder="Enter some text"
        />
        <button
          onClick={handleButtonClick}
          className="bg-green-500 hover:bg-yel-700 text-white font-bold py-2 px-4 rounded"
        >
          Display Text
        </button>


        <br />
        


        {displayText && <p className="mt-4">{displayText}</p>}


        <br /><br />
        <br /><br /><br /><br /><br />
      </div>
    );
  }

  export default Content;