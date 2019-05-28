import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from '../Header';
import Home from '../Home';
import PrivateRoute from '../Auth/PrivateRoute';
import Dashboard from '../Dashboard';
import Login from '../Login';
import Error404 from '../Error404';

const AppRouter = () => (
  <Router>
    <div>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" exact component={Login} />
        <PrivateRoute path="/dashboard" component={Dashboard} />
        <Route component={Error404} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
