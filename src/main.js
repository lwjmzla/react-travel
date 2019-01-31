import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import 'common/css/reset.css';
import 'common/css/border.css';
import 'common/css/iconfont.css';
// import 'common/stylus/mixins.styl'
// import App from './App';
import * as serviceWorker from './serviceWorker';
import Home from 'pages/Home/index.js'
import City from 'pages/City/index.js'
import Detail from 'pages/Detail/index.js'
import Page404 from 'pages/Page404/index.js'

ReactDOM.render(
  <Router>
    <Switch>
      <Route path="/" exact component={Home}></Route>
      <Route path="/city" exact component={City}></Route>
      <Route path="/detail/:id" exact component={Detail}></Route>
      <Route component={Page404}></Route>
    </Switch>
  </Router>
  , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
