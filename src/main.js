import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom'
import 'common/css/reset.css';
import 'common/less/common.less';
import 'common/stylus/common.styl'
// import 'common/css/border.css';
// import 'common/css/iconfont.css';
// import 'common/stylus/mixins.styl'
// import App from './App';
import * as serviceWorker from './serviceWorker';
import Home from 'pages/Home/index.js'
import City from 'pages/City/index.js'
import Detail from 'pages/Detail/index.js'
import Page404 from 'pages/Page404/index.js'
import Admin from 'pages/Admin/index.js'
import Button from 'pages/Ui/button.js'
import Modal from 'pages/Ui/modals.js'
import Loading from 'pages/Ui/loading.js'
import Notification from 'pages/Ui/notification.js'
import Message from 'pages/Ui/message.js'
import Tab from 'pages/Ui/tab.js'
import Gallery from 'pages/Ui/gallery.js'
import Carousel from 'pages/Ui/carousel.js'
import Login from 'pages/form/login.js'
import Register from 'pages/form/register.js'
import BaseTable from 'pages/table/basetable.js'

ReactDOM.render(
  <Router>
    <Switch>
      <Route path="/" exact render={() => 
        <Redirect to="/admin/home"></Redirect>
      }></Route>
      <Route path="/admin" render={(props) => 
        // 相当于一个 通用骨架
        <Admin {...props}>
          <Route path="/admin" exact render={() => 
            <Redirect to="/admin/home"></Redirect>
          }></Route>
          <Route path="/admin/home" component={Home}></Route>
          <Route path="/admin/ui/buttons" component={Button}></Route>
          <Route path="/admin/ui/modals" component={Modal}></Route>
          <Route path="/admin/ui/loadings" component={Loading}></Route>
          <Route path="/admin/ui/notification" component={Notification}></Route>
          <Route path="/admin/ui/messages" component={Message}></Route>
          <Route path="/admin/ui/tabs" component={Tab}></Route>
          <Route path="/admin/ui/gallery" component={Gallery}></Route>
          <Route path="/admin/ui/carousel" component={Carousel}></Route>
          <Route path="/admin/form/login" component={Login}></Route>
          <Route path="/admin/form/reg" component={Register}></Route>
          <Route path="/admin/table/basic" component={BaseTable}></Route>
        </Admin>
      }></Route>
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
