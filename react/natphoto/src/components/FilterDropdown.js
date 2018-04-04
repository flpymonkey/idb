import React from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

export default class FilterDropdown extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.setFilterBy = this.setFilterBy.bind(this);

    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  setFilterBy(param) {
    console.log("filterDropdown  " + param);
    this.props.filterFunc(param, this.props.id);
  }

  render() {
    var dropdownOpts = this.props.options.map((opt, i) =>
      <div onClick={() => this.setFilterBy(opt)}>
      <DropdownItem
          key={i}>{opt}
      </DropdownItem>
      </div>

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
