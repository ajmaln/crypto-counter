import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './App';
import Login from './components/Login';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={App} />
      <Route path='/login' exact component = {Login} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root'),
);
