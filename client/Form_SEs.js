import React from 'react';
import { Field, reduxForm } from 'redux-form';
import renderField from './renderField';
import { Button, Typography } from '@material-ui/core';

const StandardErrors = props => {
  const { handleSubmit, prevPage } = props;
  console.log(props);

  return (
    <div>
      <Typography>
        <h3>Please provide the standard error (SE) for each field.</h3>
      </Typography>
      <Typography>
        <form onSubmit={handleSubmit}>
          <Field
            name="radiusSE"
            component={renderField}
            type="number"
            label="Radius SE: "
          />
          <br />
          <Field
            name="textureSE"
            component={renderField}
            type="number"
            label="Texture SE: "
          />
          <br />
          <Field
            name="perimeterSE"
            component={renderField}
            type="number"
            label="Perimeter SE: "
          />
          <br />
          <Field
            name="areaSE"
            component={renderField}
            type="number"
            label="Area SE: "
          />
          <br />
          <Field
            name="smoothnessSE"
            component={renderField}
            type="number"
            label="Smoothness SE"
          />
          <br />
          <Field
            name="compactnessSE"
            component={renderField}
            type="number"
            label="Compactness SE"
          />
          <br />
          <Field
            name="concavitySE"
            component={renderField}
            type="number"
            label="Concavity SE"
          />
          <br />
          <Field
            name="concavePointsSE"
            component={renderField}
            type="number"
            label="Concave Points SE"
          />
          <br />
          <Field
            name="symmetrySE"
            component={renderField}
            type="number"
            label="Symmetry SE"
          />
          <br />
          <Field
            name="fractalDimensionSE"
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
