import React from 'react'
import style from './index.less'
class Footer extends React.Component{
  constructor(props){
    super(props)
    this.state = {}
  }
  render(){
    return (
      <div className={style.footer}>版权所有：慕课网&河畔一角（推荐使用谷歌浏览器，可以获得更佳操作页面体验） 技术支持：LWJ</div>
    )
  }
}

export default Footer