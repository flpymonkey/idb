import React, {Component} from "react";
import { Row, Col } from 'reactstrap';
import '../stylesheets/gridpage.css';
import '../stylesheets/general.css';

export default class Grid extends Component {
	render() {
		const photos = this.props.data.map((photo) =>
  			<GridItem data={photo} />
  		);
		return (
			<div className="body">
					<Row>
						<div>{photos}</div>
					</Row>
			</div>
		);
	}
}

class GridItem extends Component {
	render() {
		return (
			 <Col sm="4">
    			<div className="hovereffect">
					<a href="/photo/3">
        				<img className="img-responsive" src={this.props.data.img} alt=""/>
						<div className="overlay">
               			 	<h1>{this.props.data.title}</h1>
               			 	<h2>{this.props.data.subtitle}</h2>
           				</div>
					</a>
    			</div>
    		</Col>
		);
	}
}
