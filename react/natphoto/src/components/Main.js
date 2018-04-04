import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Home.js'
import About from './About.js'
import PhotoGrid from './PhotoGrid.js'
import ParkGrid from './ParkGrid.js'
import CameraGrid from './CameraGrid.js'
import PhotoDetailPage from './PhotoDetailPage.js'
import ParkDetailPage from './ParkDetailPage.js'
import CameraDetailPage from './CameraDetailPage.js'
import Search from './Search.js'
import EmptyPage from './EmptyPage.js'
import '../stylesheets/main.css';

// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"
const Main = () => (
  <main>
    <div className="siteWrapper">
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/photos/:photo_id' component={PhotoDetailPage}/>
        <Route exact path='/photos' component={PhotoGrid}/>
        <Route exact path='/parks/:park_name' component={ParkDetailPage}/>
        <Route exact path='/parks' component={ParkGrid}/>
        <Route exact path='/cameras/:camera_name' component={CameraDetailPage}/>
        <Route exact path='/cameras' component={CameraGrid}/>
        <Route exact path='/about' component={About}/>
        <Route exact path='/search' component={Search}/>
        <Route component={EmptyPage}/>
      </Switch>
    </div>
  </main>
)

export default Main
