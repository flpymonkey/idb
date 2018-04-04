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
								info: elem.number_of_photos + " Photos Taken Here",
                detail_url: "/parks/" + elem.name,
								sort1: elem.name,
								sort2: elem.states,
								sort3: elem.number_of_photos,
								filter1: elem.states,
								filter2: elem.number_of_photos
            }));
      		this.setState({
      			parks: curr_parks
      		});
    	})
  	}

	render () {
		return (
	  		<Grid
					data={this.state.parks}
					sortAttributes={["State", "# Photos"]}
					sortTypes={["alpha", "alpha", "numerical"]}
		      filterOptions1={["AK","AR","AZ","CA","CO","FL","HI","ID","KY","ME","MI","MN","MO","MT","NC","ND","NM","NV","OH","OR","SC","SD","TN","TX","UT","VA","VI","WA","WY"]}
					filter1Range={false}
		      filterOptions2={["0 - 5", "6 - 10", "11 - 15", "16 - 20", "21 - 25", "26 - 30"]}
					filer2Range={true}
					title="Parks"
					id="parkGrid"
				/>
		);
  	}
}
