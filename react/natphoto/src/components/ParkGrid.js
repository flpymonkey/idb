import React, {Component} from "react";
import Grid from './GridPage.js';

export default class ParkGrid extends Component {

	constructor(props){
		super(props);
    	this.state = {
      		parks: []
		};
  	}

  	componentDidMount() {

    	fetch('http://api.natphoto.me/parks', {
    		method: 'GET',
    		dataType: 'json'
    	}).then(results => {
    		return results.json();
    	}).then(data => {
    		var curr_parks = data.map((elem) => ({
                img: elem.image_url,
                title: elem.name,
                subtitle: elem.states,
								info: "",
                detail_url: "/parks/" + elem.name}
            ));
      		this.setState({
      			parks: curr_parks
      		});
    	})
  	}

	render () {
		return (
	  		<Grid data={this.state.parks} id="parkGrid"/>
		);
  	}
}
