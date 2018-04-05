import React from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

export default class ResetDropdown extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.clearFilter = this.clearFilter.bind(this);

    this.state = {
      dropdownOpen: false
    };
  }

  clearFilter(param) {
    this.props.clearFunc(param);
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
          Reset
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem>
            <div onClick={() => this.clearFilter("filter1")}>
              {this.props.types[0]}
            </div>
          </DropdownItem>
          <DropdownItem>
            <div onClick={() => this.clearFilter("filter2")}>
              {this.props.types[1]}
            </div>
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    );
  }
}
