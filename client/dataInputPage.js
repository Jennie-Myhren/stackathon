import React, { useState } from 'react';
import DataInputForm from './DataInputForm';
import { trainedBrain } from '../brain/neuralNet';
import ResultPage from './ResultPage';

const DataInputPage = () => {
  const [dxPrediction, setDxPrediction] = useState('');

  const result = data => {
    let prediction = trainedBrain.run(data);
    if (prediction.diagnosis === 1) {
      setDxPrediction('Malignant');
    } else {
      setDxPrediction('Benign');
    }
  };

  return (
    <div>
      {dxPrediction === '' ? (
        <DataInputForm onSubmit={result} dxPrediction={dxPrediction} />
      ) : (
        <ResultPage dxPrediction={dxPrediction} />
      )}
    </div>
  );
};

export default DataInputPage;
