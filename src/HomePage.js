import React from 'react';
import MyButton from './Button';
import AboutPage from './AboutPage';
import MonkeyImage from './Monkey';
import LloydsImage from './Lloyd';
import './App.css';

import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div className='mainPage'>
      <h1>Welcome to my app</h1>
      <MyButton />
      <AboutPage />
      <MonkeyImage />
      <LloydsImage />
      <Link to="/second">Go to Second Page</Link>
    </div>
  );
}

export default HomePage;