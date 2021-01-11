import * as React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact={true} path="/">
          <Redirect to="/home"/>
        </Route>
        <Route exact={true} path="/home" component={Dashboard} />
      </Switch>
    </Router>
  );
}

export default AppRouter;