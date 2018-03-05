import React, { Component } from 'react'

export class MyCarousel extends Component {
	render() {
        return (
			<div id="profile" class="col-sm-4">
        		<img src="../static/photos/jeff.png"/>
        		<h2 class="name">{this.props.name}</h2>
        		<h3 class="resp">{this.props.devtype} Developer</h3>
        		<span id="bio">Still thinking... about my bio. <br/> </span>
        		<div id="bioLine"></div>
        		<span class="gitProfile">Commits:  <br/> </span>
        		<span class="gitProfile">Issues:  <br/> </span>
        		<span class="gitProfile">Unit Tests: 0</span>
      		</div>
      	);
    }
}
