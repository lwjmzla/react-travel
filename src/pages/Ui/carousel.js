import React from 'react'
import { Card, Button, notification, message, Carousel  } from 'antd';
import style from './ui.less'
import './ui.styl'
class CarouselPage extends React.Component{
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
        <Card title="轮播图" className={style['card-wrap']}>
          <Carousel autoplay>
            <div><h3>1</h3></div>
            <div><h3>2</h3></div>
            <div><h3>3</h3></div>
            <div><h3>4</h3></div>
          </Carousel>
        </Card>
      </div>
    )
  }
}

export default CarouselPage