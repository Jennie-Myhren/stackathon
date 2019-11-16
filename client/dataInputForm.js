import React from 'react';
import { reduxForm } from 'redux-form';
import { Button } from '@material-ui/core';
import Means from './Form_Means';
import StandardErrors from './Form_SEs';
import Worsts from './Form_Worsts';
import ProgressBar from './ProgressBar';

const DataInputForm = props => {
  const { handleSubmit } = props;
  let formPage = 1;

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        {(formPage = 1) ? <Means /> : null}
        {(formPage = 2) ? <StandardErrors /> : null}
        {(formPage = 3) ? <Worsts /> : null}
        <Button variant="contained" type="submit" color="primary">
          Predict Diagnosis
        </Button>
        <br />
      </form>
      <br />
      <br />
      <ProgressBar formPage={formPage} />
    </div>
  );
};

//NOTE: on submit, data passed as JSON object to onSubmit fn

//reduxForm provides props about form state + handleSubmit func
export default reduxForm({ form: 'means' })(DataInputForm);
