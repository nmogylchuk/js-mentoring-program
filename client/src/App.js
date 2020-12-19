import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import TaskManager from './components/task-manager/task-manager';
import Archive from './components/archive/archive';
import Challenge from './components/challenge/challenge';
import Start from './components/start/start';
import Login from './components/login/login';
import './App.scss';

const App = () => {
  const isAuth = window.localStorage.getItem('loginInfo');
  console.log('isAuth: ' + isAuth);
  if (isAuth) {
    return (
      <Router>
        <Switch>
          <Route exact path='/start'>
            <Start />
          </Route>
          <Route exact path='/'>
            <TaskManager />
          </Route>
          <Route path='/archive'>
            <Archive />
          </Route>
          <Route path='/challenge'>
            <Challenge />
          </Route>
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
