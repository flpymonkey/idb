/*eslint no-unused-vars: "off" */
import React from 'react';
import { Router, Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom'
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

document.body.style = 'background: #262626;';

ReactDOM.render(
	<BrowserRouter>
		<App />
	</BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
