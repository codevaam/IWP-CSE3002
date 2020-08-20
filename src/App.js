import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'
import LoginPage from './components/Login';
import FavoriteSelect from './components/FavoriteSelect';
import Dashboard from './components/Dashboard';


function Login() {
  
  return (
    <Router>
      <Switch>
        <Route path="/login">
          <LoginPage />
        </Route>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
        <Route path="/interests">
          <FavoriteSelect />
        </Route>
      </Switch>
    </Router>
  );
}

export default Login;