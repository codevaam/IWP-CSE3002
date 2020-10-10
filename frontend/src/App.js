import React, { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'
import axios from 'axios'

// components
import LoginPage from './components/Login';
import FavoriteSelect from './components/FavoriteSelect';
import Dashboard from './components/Dashboard';
import Register from './components/Register';


axios.defaults.baseURL = 'http://localhost:3001';
axios.defaults.timeout = 2.5 * 1000;

function Login() {
  useEffect(()=> {
    if(sessionStorage.getItem('isLoggedIn') === null) {
      sessionStorage.setItem('isLoggedIn', false);
      sessionStorage.setItem('user', '');
    }
  })
  const loggedIn = sessionStorage.getItem('isLoggedIn');
  console.log(loggedIn);
  return (
    <Router>
      <Switch>
        <Route path="/login">
          <LoginPage />
        </Route>
        <Route path="/Register">
          <Register />
        </Route>
        <Route path="/interests">
          {loggedIn ? <FavoriteSelect/> : <Redirect to="/login" />}
        </Route>
        <Route path="/">
          {loggedIn ? <Dashboard /> : <Redirect to="/login" />}
        </Route>
      </Switch>
    </Router >
  );
}

export default Login;