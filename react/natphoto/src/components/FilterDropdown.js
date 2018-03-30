import React from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

export default class FilterDropdown extends React.Component {
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
    var dropdownOpts = this.props.options.map((opt, i) =>
      <DropdownItem key={i}>{opt}</DropdownItem>
  )
    return (
      <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle caret>
          {this.props.dropTitle}
        </DropdownToggle>
        <DropdownMenu>
          {dropdownOpts}
        </DropdownMenu>
      </Dropdown>
    );
  }
}
