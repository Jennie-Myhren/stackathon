import React from 'react';
import { Field, reduxForm } from 'redux-form';

const Means = () => {
  return (
    <div>
      <h3>Please provide the mean for each field.</h3>
      <div>
        <label htmlFor="radiusMean">Radius Mean: </label>
        <Field name="radiusMean" component="input" type="number" />
      </div>
      <br />
      <div>
        <label htmlFor="textureMean">Texture Mean: </label>
        <Field name="textureMean" component="input" type="number" />
      </div>
      <br />
      <div>
        <label htmlFor="perimeterMean">Perimeter Mean: </label>
        <Field name="perimeterMean" component="input" type="number" />
      </div>
      <br />
      <div>
        <label htmlFor="areaMean">Area Mean: </label>
        <Field name="areaMean" component="input" type="number" />
      </div>
      <br />
      <div>
        <label htmlFor="smoothnessMean">Smoothness Mean: </label>
        <Field name="smoothnessMean" component="input" type="number" />
      </div>
      <br />
      <div>
        <label htmlFor="compactnessMean">Compactness Mean: </label>
        <Field name="compactnessMean" component="input" type="number" />
      </div>
      <br />
      <div>
        <label htmlFor="concavityMean">Concavity Mean: </label>
        <Field name="concavityMean" component="input" type="number" />
      </div>
      <br />
      <div>
        <label htmlFor="concavePointsMean">Concave Points Mean: </label>
        <Field name="concavePointsMean" component="input" type="number" />
      </div>
      <br />
      <div>
        <label htmlFor="symmetryMean">Symmetry Mean: </label>
        <Field name="symmetryMean" component="input" type="number" />
      </div>
      <br />
      <div>
        <label htmlFor="fractalDimensionMean">Fractal Dimension Mean: </label>
        <Field name="fractalDimensionMean" component="input" type="number" />
      </div>
      <br />
    </div>
  );
};

export default Means;