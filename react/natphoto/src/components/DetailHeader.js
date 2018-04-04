import React, {Component} from 'react';
import { Row, Col } from 'reactstrap';
import '../stylesheets/detailheader.css';


export default class DetailHeader extends Component {
	render (){
		var keys = Object.keys(this.props.infoAttributes);
		const listItems = keys.map(function(key, i) {
			console.log(this.props.infoAttributes[key+""])
			if(this.props.infoAttributes[key+""] !== null) {
				return (
					<Row key={i}>
					<Col sm="3" className="descKeysCol">
						<h3 className="descKey">{key} </h3>
					</Col>
					<Col sm="9" className="descValsCol">
						<h3 className="descVal">{this.props.infoAttributes[key+""]}</h3>
					</Col>
				</Row>)
			}
			else {
				return ;
			}
		}.bind(this));

		if(this.props.pic !== null) {
			return (
				<Row>
	  				<Col sm="7">
							<div className="imgWrapper">
	    					<img className="image" src={this.props.pic} alt={this.props.name}/>
							</div>
	    			</Col>
						<Col sm="1"></Col>
	 		  		<Col sm="5" id="info-text">
							<div className="infoRow">{listItems}</div>
	      		</Col>
	  		</Row>
			);
		}
		else {
			return (
				<Row>
	 		  		<Col sm="11" id="info-text">
							<div className="infoRow">{listItems}</div>
	      		</Col>
	  		</Row>
			);
		}
	}
}
