import React from 'react'
import { Card, Button, Modal, Icon } from 'antd';
import style from './ui.less'

class ButtonPage extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      visible: false
    }
  }
  handleOk = (ev) => {
    console.log('ok')
    this.closeModal()
  }
  handleCancel = (ev) => {
    console.log('cancel')
    this.closeModal()
  }
  handleClick1 = (ev) => {
    this.openModal()
  }
  openModal = () => {
    this.setState({
      visible: true
    })
  }
  closeModal = () => {
    this.setState({
      visible: false
    })
  }
  handleClick11 = (type) => {
    Modal[type]({
      content: <div>111111111</div>,
      title: 'xxxxxxxxxxxxxx',
      // icon: 'right'
    })
  }
  render(){
    return (
      <div>
        <Card title="基础模态框" className={style['card-wrap']}>
          <Button type="primary" onClick={this.handleClick1}>OPEN</Button>
          <Button type="primary">自定义页脚</Button>
          <Button type="primary">顶部20px弹框</Button>
          <Button type="primary">水平垂直居中</Button>
        </Card>
        <Card title="信息确认框" className={style['card-wrap']}>
          <Button type="primary" onClick={() => this.handleClick11('confirm')}>Confirm</Button>
          <Button type="primary" onClick={() => this.handleClick11('info')}>Info</Button>
          <Button type="primary" onClick={() => this.handleClick11('success')}>Success</Button>
          <Button type="primary" onClick={() => this.handleClick11('error')}>Error</Button>
          <Button type="primary" onClick={() => this.handleClick11('warning')}>Warning</Button>
        </Card>
        <Modal title="Basic Modal" visible={this.state.visible} onOk={this.handleOk} style={{ top: 20}}
         onCancel={this.handleCancel} maskClosable={true} cancelText="取消" okText="确认">
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Modal>
      </div>
    )
  }
}

export default ButtonPage