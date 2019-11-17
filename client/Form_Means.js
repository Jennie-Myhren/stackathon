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
            name="radius_mean"
            component={renderField}
            type="number"
            label="Radius Mean: "
          />
          <br />
          <Field
            name="texture_mean"
            component={renderField}
            type="number"
            label="Texture Mean: "
          />
          <br />
          <Field
            name="perimeter_mean"
            component={renderField}
            type="number"
            label="Perimeter Mean: "
          />
          <br />
          <Field
            name="area_mean"
            component={renderField}
            type="number"
            label="Area Mean: "
          />
          <br />
          <Field
            name="smoothness_mean"
            component={renderField}
            type="number"
            label="Smoothness Mean: "
          />
          <br />
          <Field
            name="compactness_mean"
            component={renderField}
            type="number"
            label="Compactness Mean: "
          />
          <br />
          <Field
            name="concavity_mean"
            component={renderField}
            type="number"
            label="Concavity Mean: "
          />
          <br />
          <Field
            name="concave_points_mean"
            component={renderField}
            type="number"
            label="Concave Points Mean: "
          />
          <br />
          <Field
            name="symmetry_mean"
            component={renderField}
            type="number"
            label="Symmetry Mean: "
          />
          <br />
          <Field
            name="fractal_dimension_mean"
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
