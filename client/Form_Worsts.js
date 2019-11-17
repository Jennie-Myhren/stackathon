import React from 'react';
import { Field, reduxForm } from 'redux-form';
import renderField from './renderField';
import { Button, Typography } from '@material-ui/core';

const Worsts = props => {
  const { handleSubmit, prevPage } = props;
  return (
    <div>
      <Typography>
        <h3>
          Please provide the "worst" (mean of 3 largest values) for each field.
        </h3>
      </Typography>
      <Typography>
        <form onSubmit={handleSubmit}>
          <Field
            name="radius_worst"
            component={renderField}
            type="number"
            label="Radius Worst: "
          />
          <br />
          <Field
            name="texture_worst"
            component={renderField}
            type="number"
            label="Texture Worst: "
          />
          <br />
          <Field
            name="perimeter_worst"
            component={renderField}
            type="number"
            label="Perimeter Worst: "
          />
          <br />
          <Field
            name="area_worst"
            component={renderField}
            type="number"
            label="Area Worst: "
          />
          <br />
          <Field
            name="smoothness_worst"
            component={renderField}
            type="number"
            label="Smoothness Worst: "
          />
          <br />
          <Field
            name="compactness_worst"
            component={renderField}
            type="number"
            label="Compactness Worst: "
          />
          <br />
          <Field
            name="concavity_worst"
            component={renderField}
            type="number"
            label="Concavity Worst: "
          />
          <br />
          <Field
            name="concave_points_worst"
            component={renderField}
            type="number"
            label="Concave Points Worst: "
          />
          <br />
          <Field
            name="symmetry_worst"
            component={renderField}
            type="number"
            label="Symmetry Worst: "
          />
          <br />
          <Field
            name="fractal_dimension_worst"
            component={renderField}
            type="number"
            label="Fractal Dimension Worst: "
          />
          <br />
          <div>
            <Button
              type="button"
              color="secondary"
              variant="outlined"
              onClick={prevPage}
            >
              Previous Page
            </Button>
            <Button type="submit" color="secondary" variant="outlined">
              Submit Data
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
})(Worsts);
