import React, { useState } from 'react';
// import { reduxForm } from 'redux-form';
// import { Button } from '@material-ui/core';
import Means from './Form_Means';
import StandardErrors from './Form_SEs';
import Worsts from './Form_Worsts';
// import ProgressBar from './ProgressBar';

const DataInputForm = props => {
  const { handleSubmit } = props;
  const [page, setPage] = useState(1);

  const nextPage = () => {
    setPage(page + 1);
  };
  const prevPage = () => {
    setPage(page - 1);
  };

  return (
    <div>
      {page === 1 && <Means onSubmit={nextPage} />}
      {page === 2 && <StandardErrors prevPage={prevPage} onSubmit={nextPage} />}
      {page === 3 && <Worsts prevPage={prevPage} onSubmit={handleSubmit} />}
      {/* <ProgressBar /> */}
    </div>
  );
};

// const DataInputForm = props => {
//   const { handleSubmit } = props;
//   let formPage = 1;

//   return (
//     <div className="form">
//       <form onSubmit={handleSubmit}>
//         {(formPage = 1) ? <Means /> : null}
//         {(formPage = 2) ? <StandardErrors /> : null}
//         {(formPage = 3) ? <Worsts /> : null}
//         <Button variant="contained" type="submit" color="primary">
//           Predict Diagnosis
//         </Button>
//         <br />
//       </form>
//       <br />
//       <br />
//       <ProgressBar formPage={formPage} />
//     </div>
//   );
// };

//NOTE: on submit, data passed as JSON object to onSubmit fn

//reduxForm provides props about form state + handleSubmit func
// export default reduxForm({ form: 'means' })(DataInputForm);
export default DataInputForm;
