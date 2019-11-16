import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from './App';
import RunTestData from './RunTestData';
import DataInputPage from './DataInputPage';

const Routes = () => {
  return (
    <Router>
      <Route exact path="/" component={App} />
      <Route exact path="/run-test-data" component={RunTestData} />
      <Route exact path="/input-patient-data" component={DataInputPage} />
    </Router>
  );
};

export default Routes;
