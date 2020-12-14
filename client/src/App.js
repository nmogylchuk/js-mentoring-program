import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import TaskManager from './components/task-manager/task-manager';
import Archive from './components/archive/archive';
import Challenge from './components/challenge/challenge';
import Start from './components/start/start';
import Login from './components/login/login';
import Logout from './components/logout/logout';
import './App.css';

const App = () => {
  const isAuth = window.localStorage.getItem('loginInfo');
  console.log('isAuth: ' + isAuth);
  if (isAuth !== null) {
    return (
      <Router>
        <Switch>
          <Route exact path='/start' component={Start} />
          <Route exact path='/' component={TaskManager} />
          <Route path='/archive' component={Archive} />
          <Route path='/challenge' component={Challenge} />
          <Route path='/logout' component={Logout} />
          <Redirect from='*' to='/' />
        </Switch>
      </Router>
    );
  }
  return (
    <Router>
      <Switch>
        <Route path='/login' component={Login} />
        <Redirect from='*' to='/login' />
      </Switch>
    </Router>
  );
};

export default App;
