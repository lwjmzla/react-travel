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
    const props = this.props
    return (
      <Row className={style.container}>
        <Col span={3} className={style['nav-left']}>
          <NavLeft {...props}></NavLeft>
        </Col>
        <Col span={21} className={style.main}>
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