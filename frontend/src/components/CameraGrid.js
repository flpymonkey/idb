import React, {Component} from "react";
import Grid from './GridPage.js';

export default class CameraGrid extends Component {

	constructor(props){
		super(props);
		this.state = {
			cameras: []
		};
	}

	componentDidMount() {

		fetch('http://api.natphoto.me/cameras', {
			method: 'GET',
			dataType: 'json'
		}).then(results => {
			return results.json();
		}).then(data => {
			var curr_cameras = data.map((elem) => ({
				img: elem.image_url,
				title: elem.name,
				subtitle: "$" + elem.price,
				info: elem.total_megapixels,
				detail_url: "/cameras/" + elem.name,
				sort1: elem.name,
				sort2: parseFloat(elem.price, 10),
				sort3: parseFloat(elem.total_megapixels, 10),
				filter1: parseFloat(elem.price, 10),
				filter2: parseFloat(elem.total_megapixels, 10)
			}));
			this.setState({
				cameras: curr_cameras
			});
		})
	}

	render () {
		return (
			<Grid
				data={this.state.cameras}
				sortAttributes={["Name", "Price", "Megapixels"]}
				filterAttributes={["Price", "Megapixels"]}
				sortTypes2={["alpha", "numerical", "numerical"]}
				sortTypes={["(A - Z)", "(Z - A)", "Low to High", "High to Low", "Low to High", "High to Low"]}
				filterOptions1={["$0 - $1000","$1001 - $2000", "$2001 - $3000", "$3001 - $4000", "$4001 - $5000", "$5001 - $6000"]}
				filter1Range={true}
				filterOptions2={["0 - 10", "10 - 15", "16 - 20", "21 - 25", "26 - 30", "31 - 35", "36 - 40", "41 - 45", "46 - 50", "> 50"]}
				filter2Range={true}
				title="Cameras"
				id="cameraGrid"/>
		);
	}
}
