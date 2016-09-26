import React, { Component } from 'react';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import Main from '../components/main.jsx';
import Home from '../components/home.jsx';
import Register from '../components/register.jsx';
import Login from '../components/login.jsx';
import App from '../components/App.jsx';
import requireAuth from '../utils/auth.js';

const Routes = () => {
  return (
    <Router history={hashHistory}>
      {/* <Route path="/" component={Home}> */}
      <Route path="/" component={Main}>
        {/* <IndexRoute path="/"/> */}
        {/* <IndexRoute component={Login}/> */}
        {/* <Route path="register" component={Register} /> */}
        <IndexRoute component={Home}/>
        <Route path="login" component={Login} />
        <Route path="App" component={App} />
        <Route path="App" component={App} onEnter={requireAuth}/>
      </Route>
    </Router>
  );
}

export default Routes;
