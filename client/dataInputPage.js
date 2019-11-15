import React, { Component } from 'react';
import dataInputForm from './dataInputForm';

class dataInputPage extends Component {
  submit = values => {
    // print the form values to the console
    console.log(values);
  };
  render() {
    return <dataInputForm onSubmit={this.submit} />;
  }
}

export default dataInputPage;
