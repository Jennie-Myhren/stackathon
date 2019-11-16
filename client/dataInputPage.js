import React from 'react';
import DataInputForm from './DataInputForm';
// import trainedBrain from '../brain/neuralNet';

const DataInputPage = () => {
  const handleSubmit = (e, { values }) => {
    // print the form values to the console
    // trainedBrain.run(values);
    console.log('Handled Submit');
  };
  return <DataInputForm handleSubmit={handleSubmit} />;
};

export default DataInputPage;
