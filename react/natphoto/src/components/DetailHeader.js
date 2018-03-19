import React, {Component} from 'react';
import { Row, Col } from 'reactstrap';
import '../stylesheets/detailheader.css';


export default class DetailHeader extends Component {
	render (){
		var keys = Object.keys(this.props.infoAttributes);

		return (
			<Row>
  				<Col sm="6">
    				<img className="image" src={this.props.pic} alt={this.props.name}/>
    			</Col>

 		  		<Col sm="3" id="info-text">
			  		<h2 id = "infoHeader">Info</h2>
      				<h3>{keys[0]}</h3>
      				<h3>{keys[1]}</h3>
      				<h3>{keys[2]}</h3>
      				<h3>{keys[3]}</h3>
      				<h3>{keys[4]}</h3>
      				<h3>{keys[5]}</h3>
      			</Col>

      			<Col sm="3" id="ans-text">
			  		<h3>{this.props.infoAttributes[keys[0]+""]}</h3>
      				<h3>{this.props.infoAttributes[keys[1]+""]}</h3>
      				<h3>{this.props.infoAttributes[keys[2]+""]}</h3>
      				<h3>{this.props.infoAttributes[keys[3]+""]}</h3>
      				<h3>{this.props.infoAttributes[keys[4]+""]}</h3>
      				<h3>{this.props.infoAttributes[keys[5]+""]}</h3>
		  		</Col>
  			</Row>
		);
	}
}
