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
          <DropdownItem>Ascending</DropdownItem>
          <DropdownItem>Descending</DropdownItem>
          <DropdownItem divider />
          <DropdownItem>{this.props.items[0]}</DropdownItem>
          <DropdownItem>{this.props.items[1]}</DropdownItem>
          <DropdownItem>{this.props.items[2]}</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    );
  }
}
