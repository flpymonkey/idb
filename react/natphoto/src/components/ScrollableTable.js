import React, {Component} from 'react';
import { Table } from 'reactstrap';
import '../stylesheets/general.css';
import '../stylesheets/scrollabletable.css';

export default class ScrollableTable extends Component {
	render() {
		return(
			<div className="body">
				<h1 id="title" >Photos Taken</h1>
				<div id="scrollableTable">
					<Table className = "photoTable">
    					<tbody>
          					<tr>
            					<th scope="row"></th>
            						<td>
            							<a href="/photo/2">
        									<img className = "photoImage" src="https://c1.staticflickr.com/9/8406/8679159813_1f23534aed_b.jpg" alt=""/>
        								</a>
        							</td>
            						<td>Otto</td>
            						<td>@mdo</td>
          					</tr>
        				</tbody>
      				</Table>
				</div>
			</div>
		);
	}
}
