import React, {Component} from 'react';
import { Table } from 'reactstrap';
import { Link } from 'react-router-dom';
import '../stylesheets/general.css';
import '../stylesheets/scrollabletable.css';
import '../stylesheets/hover.css';

export default class ScrollableTable extends Component {

	render() {
		console.log(this.props.data)
		const elems = this.props.data.map((elem) =>
      <td>
        <div className="hovereffect">
          <Link to={elem.path}><img className = "photoImage" src={elem.img} alt="hi"/></Link>
          <div className="overlay">
            <h1>{elem.name}</h1>
          </div>
        </div>
      </td>
			);

		return(
			<div className="body">
				<h1 id="title" >{this.props.tableTitle}</h1>
				<div id="scrollableTable">
					<Table className = "photoTable">
    					<tbody>
          					<tr>
            					<th scope="row"></th>
											{elems}
          					</tr>
        				</tbody>
      				</Table>
				</div>
			</div>
		);
	}
}
