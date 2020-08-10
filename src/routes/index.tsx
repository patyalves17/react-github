import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Dashboard from '../pages/Dashoboard/index';
import Repository from '../pages/Repository/index';

const Routes: React.FC = () => (
  <Switch>
    <Route path='/' component={Dashboard} exact />
    <Route path='/repository' component={Repository} />
  </Switch>
);

export default Routes;
