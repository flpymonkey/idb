import React from 'react';
import './App.css';

// Our components
import NatPhotoNavBar from './components/NavBar.js';
import Main from './components/Main.js';

const App = () => (
  <div className="appBody">
    <NatPhotoNavBar />
    <Main />
  </div>
);

export default App;
