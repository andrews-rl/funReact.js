import React from 'react';
import './App.css';

function MonkeyImage() {
  // Define the path to the monkey image in the public directory
  const imagePath = '/assets/monkeyt.jpg';

  return (
    <div className='monkeycontainer'>
      <img className='monkey'src={imagePath} alt="Monkey" />
    </div>
  );
}

export default MonkeyImage;
