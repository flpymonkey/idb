import React from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

export default class SortDropdown extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.selectSort1Asc = this.selectSort1Asc.bind(this);
    this.selectSort1Desc = this.selectSort1Desc.bind(this);
    this.selectSort2Asc = this.selectSort2Asc.bind(this);
    this.selectSort2Desc = this.selectSort2Desc.bind(this);
    this.selectSort3Asc = this.selectSort3Asc.bind(this);
    this.selectSort3Desc = this.selectSort3Desc.bind(this);

    this.state = {
      dropdownOpen: false
    };
  }

  selectSort1Asc() {
    this.props.sortFunc("sort1", "asc");
  }

  selectSort1Desc() {
    this.props.sortFunc("sort1", "desc");
  }

  selectSort2Asc() {
    this.props.sortFunc("sort2", "asc");
  }

  selectSort2Desc() {
    this.props.sortFunc("sort2", "desc");
  }

  selectSort3Asc() {
    this.props.sortFunc("sort3", "asc");
  }

  selectSort3Desc() {
    this.props.sortFunc("sort3", "desc");
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
            <div onClick={this.selectSort1Asc}>
              {this.props.items[0]}: {this.props.types[0] === "numerical" ? "Low to High" : "(A - Z)"}
            </div>
          </DropdownItem>
          <DropdownItem>
            <div onClick={this.selectSort1Desc}>
              {this.props.items[0]}: {this.props.types[0] === "numerical" ? "High to Low" : "(Z - A)"}
            </div>
          </DropdownItem>
          <DropdownItem>
            <div onClick={this.selectSort2Asc}>
              {this.props.items[1]}: {this.props.types[1] === "numerical" ? "Low to High" : "(A - Z)"}
            </div>
          </DropdownItem>
          <DropdownItem>
            <div onClick={this.selectSort2Desc}>
              {this.props.items[1]}: {this.props.types[1] === "numerical" ? "High to Low" : "(Z - A)"}
            </div>
          </DropdownItem>
          <DropdownItem>
            <div onClick={this.selectSort3Asc}>
              {this.props.items[2]}: {this.props.types[2] === "numerical" ? "Low to High" : "(A - Z)"}
            </div>
          </DropdownItem>
          <DropdownItem>
            <div onClick={this.selectSort3Desc}>
              {this.props.items[2]}: {this.props.types[2] === "numerical" ? "High to Low" : "(Z - A)"}
            </div>
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    );
  }
}
