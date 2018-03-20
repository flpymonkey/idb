import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/Home.js';
import About from './components/About.js';
import Main from './components/Main.js';


// Our components
import NavBar from './components/NavBar.js'

const App = () => (
	<div>
		<NavBar />
		<Main />
	</div>
      
)

export default App;
