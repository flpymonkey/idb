import React, {Component} from 'react';
import { Table } from 'reactstrap';
import '../stylesheets/general.css';
import '../stylesheets/scrollabletable.css';

export default class ScrollableTable extends Component {
	render() {
		return(
			<div className="body">
				<h1 id="title" >{this.props.tableTitle}</h1>
				<div id="scrollableTable">
					<Table className = "photoTable">
    					<tbody>
          					<tr>
            					<th scope="row"></th>
            						<td>
            							<a href="/photo/2">
        									<img className = "photoImage" src={this.props.imgLink} alt={this.props.imgName}/>
        								</a>
        							</td>
          					</tr>
        				</tbody>
      				</Table>
				</div>
			</div>
		);
	}
}
