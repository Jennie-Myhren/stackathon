import React, { Component } from 'react';
import DataInputForm from './DataInputForm';

class DataInputPage extends Component {
  submit = values => {
    // print the form values to the console
    console.log(values);
  };
  render() {
    return <DataInputForm onSubmit={this.submit} />;
  }
}

export default DataInputPage;
