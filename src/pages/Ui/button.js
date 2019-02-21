import React from 'react'
import { Card, Button } from 'antd';
import style from './ui.less'

class ButtonPage extends React.Component{
  constructor(props){
    super(props)
    this.state = {}
  }
  render(){
    return (
      <div className={style['card-wrap']}>
        <Card title="基础按钮">
          <Button type="primary">LWJ</Button>
          <Button >LWJ</Button>
          <Button type="dashed">LWJ</Button>
          <Button type="danger">LWJ</Button>
          <Button disabled>LWJ</Button>
        </Card>
      </div>
    )
  }
}

export default ButtonPage