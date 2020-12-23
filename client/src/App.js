import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import TaskManager from './components/TaskManager/TaskManager';
import Archive from './components/Archive/Archive';
import Challenge from './components/Challenge/Challenge';
import Start from './components/Start/Start';
import Login from './components/Login/Login';
import './App.scss';

const App = () => {
  const isAuth = window.localStorage.getItem('loginInfo');
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
        <Route path='/login'>
          {' '}
          <Login />{' '}
        </Route>
        <Redirect from='*' to='/login' />
      </Switch>
    </Router>
  );
};

export default App;
