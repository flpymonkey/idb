import React, {Component} from 'react';

export class GroupMember extends Component {
	render() {
		let picName = `/photo/ ${this.props.pic}`;
		return (
			<div id="profile" class="col-sm-4">
        		<img className="picName" src={require(`../../../../natphoto/app/static/photos/${this.props.pic}`)} alt = "hello"/>
        		<h2 class="name">{this.props.name}</h2>
        		<h3 class="resp">{this.props.devtype} Developer</h3>
        		<span id="bio">{this.props.bio}<br/></span>
        		<div id="bioLine"></div>
        		<span class="gitProfile">Commits:  <br/></span>
        		<span class="gitProfile">Issues:  <br/></span>
        		<span class="gitProfile">Unit Tests: 0</span>
      		</div>
		);
	}
}
