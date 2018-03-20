/*eslint no-unused-vars: "off" */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.css';

// Our components
import Home from './components/Home.js'
import About from './components/About.js'
import PhotoGrid from './components/gridpage.js'
import PhotoDetail from './components/photodetailpage.js'
import CameraDetail from './components/CameraDetail.js'
import ParkDetail from './components/ParkDetail.js'

ReactDOM.render(<ParkDetail />, document.getElementById('root'));
registerServiceWorker();
