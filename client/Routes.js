import React from 'react';
import { withRouter, Route, Switch, Redirect } from 'react-router-dom';
import DataInputPage from './DataInputPage';

const Routes = () => {
  return <Route exact path="/" component={DataInputPage} />;
};

export default Routes;
