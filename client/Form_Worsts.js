import React from 'react';
import { Field, reduxForm } from 'redux-form';
import renderField from './renderField';
import Button from '@material-ui/core/Button';

const Worsts = props => {
  const { handleSubmit, prevPage } = props;
  return (
    <div>
      <h3>
        Please provide the "worst" (mean of 3 largest values) for each field.
      </h3>
      <form onSubmit={handleSubmit}>
        <Field
          name="radiusWorst"
          component={renderField}
          type="number"
          label="Radius Worst: "
        />
        <br />
        <Field
          name="textureWorst"
          component={renderField}
          type="number"
          label="Texture Worst: "
        />
        <br />
        <Field
          name="perimeterWorst"
          component={renderField}
          type="number"
          label="Perimeter Worst: "
        />
        <br />
        <Field
          name="areaWorst"
          component={renderField}
          type="number"
          label="Area Worst: "
        />
        <br />
        <Field
          name="smoothnessWorst"
          component={renderField}
          type="number"
          label="Smoothness Worst: "
        />
        <br />
        <Field
          name="compactnessWorst"
          component={renderField}
          type="number"
          label="Compactness Worst: "
        />
        <br />
        <Field
          name="concavityWorst"
          component={renderField}
          type="number"
          label="Concavity WOrst: "
        />
        <br />
        <Field
          name="concavePointsWorst"
          component={renderField}
          type="number"
          label="Concave Points Worst: "
        />
        <br />
        <Field
          name="symmetryWorst"
          component={renderField}
          type="number"
          label="Symmetry Worst: "
        />
        <br />
        <Field
          name="fractalDimensionWorst"
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
    </div>
  );
};

export default reduxForm({
  form: 'dataInput',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
})(Worsts);
