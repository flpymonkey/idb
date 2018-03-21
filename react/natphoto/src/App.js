import React from 'react';
import './App.css';

// Our components
import NavBar from './components/NavBar.js'
import Main from './components/Main.js';

const App = () => (
	<div className = "appBody">
		<NavBar />
		<Main />
	</div>

)

export default App;
