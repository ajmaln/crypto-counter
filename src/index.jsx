import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
//* Core Components
import App from './App';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
//* css
import 'react-datepicker/dist/react-datepicker.css';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={App} />
      <Route path="/login" exact component={Login} />
      <Route path="/register" exact component={Register} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root'),
);
