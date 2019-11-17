import React from 'react';
import { Field, reduxForm } from 'redux-form';
import renderField from './renderField';
import { Button, Typography } from '@material-ui/core';

const StandardErrors = props => {
  const { handleSubmit, prevPage } = props;

  return (
    <div>
      <Typography>
        <h3>Please provide the standard error (SE) for each field.</h3>
      </Typography>
      <Typography>
        <form onSubmit={handleSubmit}>
          <Field
            name="radius_se"
            component={renderField}
            type="number"
            label="Radius SE: "
          />
          <br />
          <Field
            name="texture_se"
            component={renderField}
            type="number"
            label="Texture SE: "
          />
          <br />
          <Field
            name="perimeter_se"
            component={renderField}
            type="number"
            label="Perimeter SE: "
          />
          <br />
          <Field
            name="area_se"
            component={renderField}
            type="number"
            label="Area SE: "
          />
          <br />
          <Field
            name="smoothness_se"
            component={renderField}
            type="number"
            label="Smoothness SE"
          />
          <br />
          <Field
            name="compactness_se"
            component={renderField}
            type="number"
            label="Compactness SE"
          />
          <br />
          <Field
            name="concavity_se"
            component={renderField}
            type="number"
            label="Concavity SE"
          />
          <br />
          <Field
            name="concave_points_se"
            component={renderField}
            type="number"
            label="Concave Points SE"
          />
          <br />
          <Field
            name="symmetry_se"
            component={renderField}
            type="number"
            label="Symmetry SE"
          />
          <br />
          <Field
            name="fractal_dimension_se"
            component={renderField}
            type="number"
            label="Fractal Dimension SE"
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
              Next Page
            </Button>
          </div>
        </form>
      </Typography>
    </div>
  );
};

// export default StandardErrors;
export default reduxForm({
  form: 'dataInput',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
})(StandardErrors);
