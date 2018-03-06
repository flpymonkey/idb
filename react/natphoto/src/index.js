import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.css';

// Our components
//import NavBar from './components/NavBar.js'
import Home from './components/Home.js'
import About from './components/About.js'
import PhotoGrid from './components/gridpage.js'

ReactDOM.render(<About />, document.getElementById('root'));
registerServiceWorker();
