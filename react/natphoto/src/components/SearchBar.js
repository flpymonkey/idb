import React, { Component } from 'react';
import { Input, Form } from 'reactstrap';

export default class SearchBar extends Component {

  render() {
    return (
      <Form inline>
        <Input name="search" id="searchBar" placeholder="Search" />
      </Form>
    );
  }

}

