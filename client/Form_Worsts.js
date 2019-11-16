import React from 'react';
import { Field, reduxForm } from 'redux-form';

const Worsts = () => {
  return (
    <div>
      <h3>
        Please provide the "worst" (mean of 3 largest values) for each field.
      </h3>
      <div>
        <label htmlFor="radiusWorst">Radius Worst: </label>
        <Field name="radiusWorst" component="input" type="number" />
      </div>
      <br />
      <div>
        <label htmlFor="textureWorst">Texture Worst: </label>
        <Field name="textureWorst" component="input" type="number" />
      </div>
      <br />
      <div>
        <label htmlFor="perimeterWorst">Perimeter Worst: </label>
        <Field name="perimeterWorst" component="input" type="number" />
      </div>
      <br />
      <div>
        <label htmlFor="areaWorst">Area Worst: </label>
        <Field name="areaWorst" component="input" type="number" />
      </div>
      <br />
      <div>
        <label htmlFor="smoothnessWorst">Smoothness Worst: </label>
        <Field name="smoothnessWorst" component="input" type="number" />
      </div>
      <br />
      <div>
        <label htmlFor="compactnessWorst">Compactness Worst: </label>
        <Field name="compactnessWorst" component="input" type="number" />
      </div>
      <br />
      <div>
        <label htmlFor="concavityWorst">Concavity Worst: </label>
        <Field name="concavityWorst" component="input" type="number" />
      </div>
      <br />
      <div>
        <label htmlFor="concavePointsWorst">Concave Points Worst: </label>
        <Field name="concavePointsWorst" component="input" type="number" />
      </div>
      <br />
      <div>
        <label htmlFor="symmetryWorst">Symmetry Worst: </label>
        <Field name="symmetryWorst" component="input" type="number" />
      </div>
      <br />
      <div>
        <label htmlFor="fractalDimensionWorst">Fractal Dimension Worst: </label>
        <Field name="fractalDimensionWorst" component="input" type="number" />
      </div>
      <br />
    </div>
  );
};

export default Worsts;
