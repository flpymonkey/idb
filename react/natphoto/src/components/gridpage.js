import React, {Component} from "react";
import { Row, Col } from 'reactstrap';
import '../stylesheets/gridpage.css';
import '../stylesheets/general.css';

export default class Grid extends Component {
	render() {
		return (
			<div className="body">
					<Row>
  						<GridItem data={this.props.data[0]} />
  						<GridItem data={this.props.data[1]} />
  						<GridItem data={this.props.data[2]} />
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
               			 	<h3>by</h3>
               			 	<h2>{this.props.data.subtitle}</h2>
           				</div>
					</a>
    			</div>
    		</Col>
		);
	}
}
