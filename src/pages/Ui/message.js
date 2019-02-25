import React from 'react'
import { Card, Button, notification, message } from 'antd';
import style from './ui.less'
class Message extends React.Component{
  constructor(props){
    super(props)
    this.state = {
    }
  }
  openMessage = (type) => {
    message[type]('恭喜你，React课程晋级成功');
  };
  openMessageLoad = (type, time) => {
    const hide = message[type]('loading', 0);
    setTimeout(() => {
      hide()
    }, 5000)
  };
  render(){
    return (
      <div>
        <Card title="全局Message" className={style['card-wrap']}>
          <Button type="primary"  onClick={() => this.openMessage('success')}>success</Button>
          <Button type="primary"  onClick={() => this.openMessage('info')}>info</Button>
          <Button type="primary"  onClick={() => this.openMessage('warning')}>warning</Button>
          <Button type="primary"  onClick={() => this.openMessage('error')}>error</Button>
          <Button type="primary"  onClick={() => this.openMessageLoad('loading')}>loading</Button>
        </Card>
      </div>
    )
  }
}

export default Message