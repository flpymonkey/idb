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

// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"
const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/photos/:photo_id' component={PhotoDetailPage}/>
      <Route path='/photos' component={PhotoGrid}/>
      <Route path='/parks/:park_name' component={ParkDetailPage}/>
      <Route path='/parks' component={ParkGrid}/>
      <Route path='/cameras/:camera_name' component={CameraDetailPage}/>
      <Route path='/cameras' component={CameraGrid}/>
      <Route path='/about' component={About}/>
      <Route path='/search' component={Search}/>
    </Switch>
  </main>
)

export default Main
