import React from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

export default class SortDropdown extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.selectSortByInfo = this.selectSortByInfo.bind(this);
    this.selectSortByTitle = this.selectSortByTitle.bind(this);
    this.selectSortBySubtitle = this.selectSortBySubtitle.bind(this);

    this.state = {
      dropdownOpen: false
    };
  }

  selectSortByTitle() {
    this.props.func("title");
  }

  selectSortBySubtitle() {
    this.props.func("subtitle");
  }

  selectSortByInfo() {
    this.props.func("info");
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
            <div onClick={this.selectSortByInfo}>
              {this.props.items[0]}: {this.props.types[0] === "numerical" ? "Low to High" : "(A - Z)"}
            </div>
          </DropdownItem>
          <DropdownItem>
            <div onClick={this.selectSortByInfo}>
              {this.props.items[0]}: {this.props.types[0] === "numerical" ? "High to Low" : "(Z - A)"}
            </div>
          </DropdownItem>
          <DropdownItem>
            <div onClick={this.selectSortByTitle}>
              {this.props.items[1]}: {this.props.types[1] === "numerical" ? "Low to High" : "(A - Z)"}
            </div>
          </DropdownItem>
          <DropdownItem>
            <div onClick={this.selectSortByTitle}>
              {this.props.items[1]}: {this.props.types[1] === "numerical" ? "High to Low" : "(Z - A)"}
            </div>
          </DropdownItem>
          <DropdownItem>
            <div onClick={this.selectSortBySubtitle}>
              {this.props.items[2]}: {this.props.types[2] === "numerical" ? "Low to High" : "(A - Z)"}
            </div>
          </DropdownItem>
          <DropdownItem>
            <div onClick={this.selectSortBySubtitle}>
              {this.props.items[2]}: {this.props.types[2] === "numerical" ? "High to Low" : "(Z - A)"}
            </div>
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    );
  }
}
