import React, { Component } from 'react';
import DataInputForm from './DataInputForm';

const DataInputPage = () => {
  const handleSubmit = values => {
    // print the form values to the console
    console.log(values);
  };
  return <DataInputForm handleSubmit={handleSubmit} />;
};

export default DataInputPage;
