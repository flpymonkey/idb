import React, {Component} from 'react';
import { Table } from 'reactstrap';
import '../stylesheets/general.css';
import '../stylesheets/scrollabletable.css';

export default class ScrollableTable extends Component {

	render() {
		console.log(this.props.data)
		const elems = this.props.data.map((elem) =>
				<td>
					<img className = "photoImage" src={elem.img} alt="hi"/>
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
