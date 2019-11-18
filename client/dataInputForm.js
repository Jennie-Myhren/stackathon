import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Means from './Form_Means';
import StandardErrors from './Form_SEs';
import Worsts from './Form_Worsts';

const DataInputForm = props => {
  const [page, setPage] = useState(1);
  const { onSubmit } = props;

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
      {page === 3 && <Worsts prevPage={prevPage} onSubmit={onSubmit} />}
    </div>
  );
};

DataInputForm.propTypes = {
  onSubmit: PropTypes.func,
};

export default DataInputForm;
