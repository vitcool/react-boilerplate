import React from 'react';
import {
  Switch, Router, Route, Redirect,
} from 'react-router-dom';

import history from '../helpers/history';

import {
  HOME,
  POSTS,
  ABOUT,
} from '../constants/routes';

import Home from '../pages/Home';
import Posts from '../containers/Posts';
import About from '../pages/About';

const Routes = () => (
  <Router history={history}>
    <Switch>
      <Route exact={true} path={HOME} component={Home} />
      <Route path={POSTS} component={Posts} />
      <Route path={ABOUT} component={About} />
      <Redirect to={HOME} />
    </Switch>
  </Router>
);

export default Routes;
