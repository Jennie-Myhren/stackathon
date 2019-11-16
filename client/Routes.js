import React from 'react';
import { Route, Switch } from 'react-router-dom';
import TestPage from './TestPage';

const Routes = () => {
  return (
    <Switch>
      <Route path="/" component={TestPage} />
    </Switch>
  );
};

export default Routes;
