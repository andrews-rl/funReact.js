import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import your components for different pages
import HomePage from './HomePage';
import SecondPage from './SecondPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" component={HomePage} />
        <Route path="/second" component={SecondPage} />
      </Routes>
    </Router>
  );
}

export default App;

