import React, {Component} from 'react';
import { Row, Col } from 'reactstrap';
import '../stylesheets/detailheader.css';


export default class DetailHeader extends Component {
	render (){
		var keys = Object.keys(this.props.infoAttributes);
		const listItems = keys.map((key) =>
			<Row>
				<Col sm="6">
					<h3>{key} </h3>
				</Col>
				<Col sm="6">
					<h3 className={key.replace(' ', '-')}>{this.props.infoAttributes[key+""]}</h3>
				</Col>
			</Row>
		);

		return (
			<Row>
  				<Col sm="6">
						<div className="imgWrapper">
    					<img className="image" src={this.props.pic} alt={this.props.name}/>
						</div>
    			</Col>
					<Col sm="1"></Col>

 		  		<Col sm="5" id="info-text">
						<Row>
			  			<h2 id = "infoHeader">Info</h2>
						</Row>
						<Row>
							<div>{listItems}</div>
						</Row>
      		</Col>
  		</Row>
		);
	}
}
