import React, {Component} from 'react';
import { Table } from 'reactstrap';
import { Link } from 'react-router-dom';
import '../stylesheets/general.css';
import '../stylesheets/scrollabletable.css';
import '../stylesheets/hover.css';

export default class ScrollableTable extends Component {

	render() {
		const elems = this.props.data.map((elem, i) =>
      <td key={i}>
        <Link to={elem.path}>
        <div className="hovereffect">
        <img className = "photoImage" src={elem.img} alt="hi"/>
          <div className="overlay">
            <h1>{elem.name || "Unknown"}</h1>
          </div>
        </div>
        </Link>
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
