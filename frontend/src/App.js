import React from 'react';
import './App.css';

// Our components
import NatPhotoNavBar from './components/NavBar.js';
import Main from './components/Main.js';

/* The main App handler, renders a navigation bar at the top of the page */
const App = () => (
  <div className="appBody">
    <NatPhotoNavBar />
    <Main />
  </div>
);

export default App;
