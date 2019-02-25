import React from 'react'
import { Card, Button, notification, message, Row, Col } from 'antd';
import style from './ui.less'
import './ui.styl'
const { Meta } = Card;
class Gallery extends React.Component{
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
      <div >
        <Row className="gallary" gutter={8}>
          <Col span={5}>
            <Card hoverable style={{ width: 320 }} cover={<img alt="example" src="http://imoocms.51purse.com/gallery/1.png" />}>
              <Meta title="Europe Street beat" description="www.instagram.com"/>
            </Card>
            <Card hoverable style={{ width: 320 }} cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}>
              <Meta title="Europe Street beat" description="www.instagram.com"/>
            </Card>
          </Col>
          <Col span={5}>
            <Card hoverable style={{ width: 320 }} cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}>
              <Meta title="Europe Street beat" description="www.instagram.com"/>
            </Card>
            <Card hoverable style={{ width: 320 }} cover={<img alt="example" src="http://imoocms.51purse.com/gallery/1.png" />}>
              <Meta title="Europe Street beat" description="www.instagram.com"/>
            </Card>
            <Card hoverable style={{ width: 320 }} cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}>
              <Meta title="Europe Street beat" description="www.instagram.com"/>
            </Card>
          </Col>
          <Col span={5}>
            <Card hoverable style={{ width: 320 }} cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}>
              <Meta title="Europe Street beat" description="www.instagram.com"/>
            </Card>
            <Card hoverable style={{ width: 320 }} cover={<img alt="example" src="http://imoocms.51purse.com/gallery/1.png" />}>
              <Meta title="Europe Street beat" description="www.instagram.com"/>
            </Card>
          </Col>
          <Col span={5}>
            <Card hoverable style={{ width: 320 }} cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}>
              <Meta title="Europe Street beat" description="www.instagram.com"/>
            </Card>
            <Card hoverable style={{ width: 320 }} cover={<img alt="example" src="http://imoocms.51purse.com/gallery/1.png" />}>
              <Meta title="Europe Street beat" description="www.instagram.com"/>
            </Card>
            <Card hoverable style={{ width: 320 }} cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}>
              <Meta title="Europe Street beat" description="www.instagram.com"/>
            </Card>
          </Col>
          <Col span={4}>
            <Card hoverable style={{ width: 250 }} cover={<img alt="example" src="http://imoocms.51purse.com/gallery/1.png" />}>
              <Meta title="Europe Street beat" description="www.instagram.com"/>
            </Card>
            <Card hoverable style={{ width: 250 }} cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}>
              <Meta title="Europe Street beat" description="www.instagram.com"/>
            </Card>
          </Col>
        </Row>
        
      </div>
    )
  }
}

export default Gallery