import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import 'common/css/reset.css';
import 'common/less/common.less';
import { Row, Col } from 'antd';
// import 'common/css/border.css';
// import 'common/css/iconfont.css';
// import 'common/stylus/mixins.styl'
// import App from './App';
import * as serviceWorker from './serviceWorker';
import Header from 'components/Header/index.js'
import Footer from 'components/Footer/index.js'
import NavLeft from 'components/NavLeft/index.js'
import Home from 'pages/Home/index.js'
import City from 'pages/City/index.js'
import Detail from 'pages/Detail/index.js'
import Page404 from 'pages/Page404/index.js'

ReactDOM.render(
  <Row className="container">
    <Col span="3" className="nav-left">
      <NavLeft></NavLeft>
    </Col>
    <Col span="21" className="main">
      <Header></Header>
      <div className="content">
        <Router>
          <Switch>
            <Route path="/" exact component={Home}></Route>
            <Route path="/city" exact component={City}></Route>
            <Route path="/detail/:id" exact component={Detail}></Route>
            <Route component={Page404}></Route>
          </Switch>
        </Router>
      </div>
      <Footer></Footer>
    </Col>
  </Row>
  , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
