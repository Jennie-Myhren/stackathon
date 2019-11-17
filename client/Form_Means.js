import React from 'react';
import { Field, reduxForm } from 'redux-form';
import renderField from './renderField';
import Button from '@material-ui/core/Button';
import { Typography } from '@material-ui/core';

const Means = props => {
  const { onSubmit } = props;
  return (
    <div>
      <Typography>
        <h3>Please provide the mean for each field.</h3>
      </Typography>
      <Typography>
        <form onSubmit={onSubmit}>
          <Field
            name="radiusMean"
            component={renderField}
            type="number"
            label="Radius Mean: "
          />
          <br />
          <Field
            name="textureMean"
            component={renderField}
            type="number"
            label="Texture Mean: "
          />
          <br />
          <Field
            name="perimeterMean"
            component={renderField}
            type="number"
            label="Perimeter Mean: "
          />
          <br />
          <Field
            name="areaMean"
            component={renderField}
            type="number"
            label="Area Mean: "
          />
          <br />
          <Field
            name="smoothnessMean"
            component={renderField}
            type="number"
            label="Smoothness Mean: "
          />
          <br />
          <Field
            name="compactnessMean"
            component={renderField}
            type="number"
            label="Compactness Mean: "
          />
          <br />
          <Field
            name="concavityMean"
            component={renderField}
            type="number"
            label="Concavity Mean: "
          />
          <br />
          <Field
            name="concavePointsMean"
            component={renderField}
            type="number"
            label="Concave Points Mean: "
          />
          <br />
          <Field
            name="symmetryMean"
            component={renderField}
            type="number"
            label="Symmetry Mean: "
          />
          <br />
          <Field
            name="fractalDimensionMean"
            component={renderField}
            type="number"
            label="Fractal Dimension Mean: "
          />
          <br />

          <div>
            <Button
              type="submit"
              className="next"
              color="secondary"
              variant="outlined"
            >
              Next Page
            </Button>
          </div>
        </form>
      </Typography>
    </div>
  );
};

export default reduxForm({
  form: 'dataInput',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
})(Means);
