import React from 'react'
import style from './index.less'

class Home extends React.Component{
  constructor(props){
    super(props)
    this.state = {name: ''}
  }
  render(){

    return (
      <div className={`${style["home-wrap"]}`}>
      欢迎学习IMooc后台管理系统课程
      </div>
    )
  }
}

export default Home