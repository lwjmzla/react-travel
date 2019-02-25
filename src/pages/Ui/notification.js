import React from 'react'
import { Card, Button, notification } from 'antd';
import style from './ui.less'
notification.config({
  placement: 'bottomRight', // ['topLeft', 'topRight', 'bottomLeft', 'bottomRight'];
});
class Notification extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      loading: false
    }
  }
  openNotificationWithIcon = (type) => {
    notification[type]({
      message: 'Notification Title',
      description: 'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
    });
  };
  render(){
    return (
      <div>
        <Card title="通知提醒框" className={style['card-wrap']}>
          <Button type="primary"  onClick={() => this.openNotificationWithIcon('success')}>success</Button>
          <Button type="primary"  onClick={() => this.openNotificationWithIcon('info')}>info</Button>
          <Button type="primary"  onClick={() => this.openNotificationWithIcon('warning')}>warning</Button>
          <Button type="primary"  onClick={() => this.openNotificationWithIcon('error')}>error</Button>
        </Card>
      </div>
    )
  }
}

export default Notification