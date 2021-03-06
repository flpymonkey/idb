import React from 'react';
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';

/*
 * dropdown of options to reset any filter chosen
 */
export default class ResetDropdown extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.clearFilter = this.clearFilter.bind(this);

    this.state = {
      dropdownOpen: false
    };
  }

  /*
   * send reset option chosen to parent so it can set state correctly to this
   */
  clearFilter(param) {
    this.props.clearFunc(param);
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  /*
   * renders reset dropdown options
   */
  render() {
    return (
      <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle caret>Reset</DropdownToggle>
        <DropdownMenu>
          <DropdownItem id="reset1" onClick={() => this.clearFilter('filter1')}>
            {this.props.types[0]}
          </DropdownItem>
          <DropdownItem id="reset2" onClick={() => this.clearFilter('filter2')}>
            {this.props.types[1]}
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    );
  }
}
