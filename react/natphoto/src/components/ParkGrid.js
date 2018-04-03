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
								sort3: elem.number_of_photos
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
					sortAttributes={["Name", "State", "# Photos"]}
					sortTypes={["alpha", "alpha", "numerical"]}
					filterOptions1={[]}
		      filterOptions2={["AK","AL","AR","AZ","CA","CO","CT","DC","DE","FL","GA","GU","HI","IA","ID", "IL","IN","KS","KY","LA","MA","MD","ME","MH","MI",
					"MN","MO","MS","MT","NC","ND","NE","NH","NJ","NM","NV","NY", "OH","OK","OR","PA","PR","PW","RI","SC","SD","TN","TX","UT","VA","VI","VT","WA",
					"WI","WV","WY"]}
		      filterOptions3={["< 2000", "2001", "2002", "2003", "2004", "2005", "2006", "2007", "2008", "2009", "2010", "2011", "2012", "2013", "2014", "2015", "2016",
		      "2017", "2018"]}
					title="Parks"
					id="parkGrid"
				/>
		);
  	}
}
