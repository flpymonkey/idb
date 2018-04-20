import React from 'react';
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';

/*
 * dropdown to sort options to filter model card by
 */
export default class SortDropdown extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.selectSort = this.selectSort.bind(this);

    this.state = {
      dropdownOpen: false
    };
  }

  /*
   * send sort option chosen to parent so it can set state correctly to this
   */
  selectSort(sortBy, direct, label) {
    this.props.sortFunc(sortBy, direct, label);
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  /*
   * renders all of the sort dropdown options
   */
  render() {
    return (
      <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle caret id="sortButton">
          {this.props.dropTitle}
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem id="sort1">
            <div
              onClick={() =>
                this.selectSort(
                  'sort1',
                  'asc',
                  this.props.items[0] + ': ' + this.props.types[0]
                )
              }
            >
              {this.props.items[0]}: {this.props.types[0]}
            </div>
          </DropdownItem>
          <DropdownItem id="sort2">
            <div
              onClick={() =>
                this.selectSort(
                  'sort1',
                  'desc',
                  this.props.items[0] + ': ' + this.props.types[1]
                )
              }
            >
              {this.props.items[0]}: {this.props.types[1]}
            </div>
          </DropdownItem>
          <DropdownItem id="sort3">
            <div
              onClick={() =>
                this.selectSort(
                  'sort2',
                  'asc',
                  this.props.items[1] + ': ' + this.props.types[2]
                )
              }
            >
              {this.props.items[1]}: {this.props.types[2]}
            </div>
          </DropdownItem>
          <DropdownItem id="sort4">
            <div
              onClick={() =>
                this.selectSort(
                  'sort2',
                  'desc',
                  this.props.items[1] + ': ' + this.props.types[3]
                )
              }
            >
              {this.props.items[1]}: {this.props.types[3]}
            </div>
          </DropdownItem>
          <DropdownItem id="sort5">
            <div
              onClick={() =>
                this.selectSort(
                  'sort3',
                  'asc',
                  this.props.items[2] + ': ' + this.props.types[4]
                )
              }
            >
              {this.props.items[2]}: {this.props.types[4]}
            </div>
          </DropdownItem>
          <DropdownItem id="sort6">
            <div
              onClick={() =>
                this.selectSort(
                  'sort3',
                  'desc',
                  this.props.items[2] + ': ' + this.props.types[5]
                )
              }
            >
              {this.props.items[2]}: {this.props.types[5]}
            </div>
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    );
  }
}
