import React from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

export default class SortDropdown extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  render() {
    return (
      <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle caret>
          {this.props.dropTitle}
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem>{this.props.items[0]}: {this.props.types[0] === "numerical" ? "Low to High" : "(A - Z)"}</DropdownItem>
          <DropdownItem>{this.props.items[0]}: {this.props.types[0] === "numerical" ? "High to Low" : "(Z - A)"}</DropdownItem>
          <DropdownItem>{this.props.items[1]}: {this.props.types[1] === "numerical" ? "Low to High" : "(A - Z)"}</DropdownItem>
          <DropdownItem>{this.props.items[1]}: {this.props.types[1] === "numerical" ? "High to Low" : "(Z - A)"}</DropdownItem>
          <DropdownItem>{this.props.items[2]}: {this.props.types[2] === "numerical" ? "Low to High" : "(A - Z)"}</DropdownItem>
          <DropdownItem>{this.props.items[2]}: {this.props.types[2] === "numerical" ? "High to Low" : "(Z - A)"}</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    );
  }
}
