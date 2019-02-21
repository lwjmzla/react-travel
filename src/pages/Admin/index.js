import React from 'react'
import style from './index.less'
import { Row, Col } from 'antd';
import Header from 'components/Header/index.js'
import Footer from 'components/Footer/index.js'
import NavLeft from 'components/NavLeft/index.js'

class Admin extends React.Component{
  constructor(props){
    super(props)
    this.state = {name: ''}
  }
  render(){

    return (
      <Row className="container">
        <Col span={3} className="nav-left">
          <NavLeft></NavLeft>
        </Col>
        <Col span={21} className="main">
          <Header></Header>
          <div className={style.content}>
            {this.props.children}
          </div>
          <Footer></Footer>
        </Col>
      </Row>
    )
  }
}

export default Admin