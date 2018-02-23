import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// Our components
import NavBar from './components/NavBar.js'



ReactDOM.render(<NavBar />, document.getElementById('root'));
registerServiceWorker();
