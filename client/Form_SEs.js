import React from 'react';
import { Field, reduxForm } from 'redux-form';

const StandardErrors = () => {
  return (
    <div>
      <h3>Please provide the standard error (SE) for each field.</h3>
      <div>
        <label htmlFor="radiusSE">Radius SE: </label>
        <Field name="radiusSE" component="input" type="number" />
      </div>
      <br />
      <div>
        <label htmlFor="textureSE">Texture SE: </label>
        <Field name="textureSE" component="input" type="number" />
      </div>
      <br />
      <div>
        <label htmlFor="perimeterSE">Perimeter SE: </label>
        <Field name="perimeterSE" component="input" type="number" />
      </div>
      <br />
      <div>
        <label htmlFor="areaSE">Area SE: </label>
        <Field name="areaSE" component="input" type="number" />
      </div>
      <br />
      <div>
        <label htmlFor="smoothnessSE">Smoothness SE: </label>
        <Field name="smoothnessSE" component="input" type="number" />
      </div>
      <br />
      <div>
        <label htmlFor="compactnessSE">Compactness SE: </label>
        <Field name="compactnessSE" component="input" type="number" />
      </div>
      <br />
      <div>
        <label htmlFor="concavitySE">Concavity SE: </label>
        <Field name="concavitySE" component="input" type="number" />
      </div>
      <br />
      <div>
        <label htmlFor="concavePointsSE">Concave Points SE: </label>
        <Field name="concavePointsSE" component="input" type="number" />
      </div>
      <br />
      <div>
        <label htmlFor="symmetrySE">Symmetry SE: </label>
        <Field name="symmetrySE" component="input" type="number" />
      </div>
      <br />
      <div>
        <label htmlFor="fractalDimensionSE">Fractal Dimension SE: </label>
        <Field name="fractalDimensionSE" component="input" type="number" />
      </div>
      <br />
    </div>
  );
};

export default StandardErrors;
