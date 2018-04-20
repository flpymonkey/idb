import React from 'react';
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';

/*
 * dropdown to display options to filter model card by
 */
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

  /*
   * send filter option chosen to parent so it can set state correctly to this
   */
  setFilterBy(param) {
    this.props.filterFunc(param);
  }

  /*
   * loops through all the filter options to create a dropdown for each
   * and create a dropdown item for the current opt
   */
  render() {
    var dropdownOpts = this.props.options.map((opt, i) => (
      <div key={i} onClick={() => this.setFilterBy(opt)}>
        <DropdownItem key={i} id={'filter' + i}>
          {opt}
        </DropdownItem>
      </div>
    ));
    return (
      <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle caret>{this.props.dropTitle}</DropdownToggle>
        <DropdownMenu>{dropdownOpts}</DropdownMenu>
      </Dropdown>
    );
  }
}
