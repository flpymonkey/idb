import React, { Component } from 'react';
import { Redirect } from 'react-router';
import { Input, Form } from 'reactstrap';

export default class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      fireRedirect: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    this.setState({ fireRedirect: true });
  }

  /* Render the search bar as a form. Redirect to /search?q=<query> when
   * the form is submitted.
   */
  render() {
    return (
      <Form inline onSubmit={this.handleSubmit}>
        <Input
          name="q"
          id="searchBar"
          placeholder="Search"
          maxLength="200"
          value={this.state.value}
          onChange={this.handleChange}
        />
        {this.state.fireRedirect && <Redirect to={'/search'} />}
      </Form>
    );
  }
}
