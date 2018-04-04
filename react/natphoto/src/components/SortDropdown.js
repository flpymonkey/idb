import React from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

export default class SortDropdown extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.selectSort = this.selectSort.bind(this);

    this.state = {
      dropdownOpen: false
    };
  }

  selectSort(sortBy, direct) {
        console.log("selectSort  ");
    this.props.sortFunc(sortBy, direct);
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
          <DropdownItem>
            <div onClick={() => this.selectSort("sort1", "asc")}>
              {this.props.items[0]}: {this.props.types[0] === "numerical" ? "Low to High" : "(A - Z)"}
            </div>
          </DropdownItem>
          <DropdownItem>
            <div onClick={() => this.selectSort("sort1", "desc")}>
              {this.props.items[0]}: {this.props.types[0] === "numerical" ? "High to Low" : "(Z - A)"}
            </div>
          </DropdownItem>
          <DropdownItem>
            <div onClick={() => this.selectSort("sort2", "asc")}>
              {this.props.items[1]}: {this.props.types[1] === "numerical" ? "Low to High" : "(A - Z)"}
            </div>
          </DropdownItem>
          <DropdownItem>
            <div onClick={() => this.selectSort("sort2", "desc")}>
              {this.props.items[1]}: {this.props.types[1] === "numerical" ? "High to Low" : "(Z - A)"}
            </div>
          </DropdownItem>
          <DropdownItem>
            <div onClick={() => this.selectSort("sort3", "asc")}>
              {this.props.items[2]}: {this.props.types[2] === "numerical" ? "Low to High" : "(A - Z)"}
            </div>
          </DropdownItem>
          <DropdownItem>
            <div onClick={() => this.selectSort("sort3", "desc")}>
              {this.props.items[2]}: {this.props.types[2] === "numerical" ? "High to Low" : "(Z - A)"}
            </div>
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    );
  }
}
