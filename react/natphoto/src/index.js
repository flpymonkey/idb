/*eslint no-unused-vars: "off" */
import React from 'react';
import { Router, Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom'
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.css';

// Our components
//import NavBar from './components/NavBar.js'
import Home from './components/Home.js'
import About from './components/About.js'
import PhotoGrid from './components/PhotoGrid.js'
import PhotoDetail from './components/PhotoDetailPage.js'
import CameraDetail from './components/CameraDetail.js'
import ParkDetail from './components/ParkDetail.js'
import NavBar from './components/NavBar.js'

ReactDOM.render(
	<BrowserRouter>
		<App />
	</BrowserRouter>,
	document.getElementById('root')
);
