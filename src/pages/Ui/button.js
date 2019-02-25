import React from 'react'
import { Card, Button, Icon, Radio } from 'antd';
import style from './ui.less'
const ButtonGroup = Button.Group;

class ButtonPage extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      isLoading: true,
      size: 'default'
    }
  }
  handleCloseLoading = (ev) => {
    this.setState({
      isLoading: false
    })
  }
  handleSizeChange = (ev) => {
    this.setState({ size: ev.target.value });
  }
  render(){
    return (
      <div>
        <Card title="基础按钮" className={style['card-wrap']}>
          <Button type="primary">LWJ</Button>
          <Button >LWJ</Button>
          <Button type="dashed">LWJ</Button>
          <Button type="danger">LWJ</Button>
          <Button disabled>LWJ</Button>
        </Card>
        <Card title="图形按钮" className={style['card-wrap']}>
          <Button icon="plus">创建</Button>
          <Button icon="edit">编辑</Button>
          <Button icon="delete">删除</Button>
          <Button icon="search" shape="circle"></Button>
          <Button type="primary" icon="search" >搜索</Button>
          <Button type="primary" icon="download" >下载</Button>
        </Card>
        <Card title="Loading按钮" className={style['card-wrap']}>
          <Button type="primary" loading={this.state.isLoading}>确定</Button>
          <Button type="primary" loading={this.state.isLoading} shape="circle"></Button>
          <Button  loading={this.state.isLoading}>点击加载</Button>
          <Button loading={this.state.isLoading} shape="circle"></Button>
          <Button type="primary" onClick={this.handleCloseLoading}>关闭</Button>
        </Card>
        <Card title="按钮组" className={style['card-wrap']}>
          <ButtonGroup>
            <Button type="primary" icon="left" style={{marginRight: 0}}>返回</Button>
            <Button type="primary">
              前进<Icon type="right"></Icon>
            </Button>
          </ButtonGroup>
        </Card>
        <Card title="按钮尺寸" className={style['card-wrap']}>
          <Radio.Group value={this.state.size} onChange={this.handleSizeChange}>
            <Radio.Button value="large">Large</Radio.Button>
            <Radio.Button value="default">Default</Radio.Button>
            <Radio.Button value="small">Small</Radio.Button>
            <Radio value="large">Large</Radio>
            <Radio value="default">Default</Radio>
            <Radio value="small">Small</Radio>
          </Radio.Group>
          <Button type="primary" size={this.state.size}>LWJ</Button>
          <Button size={this.state.size}>LWJ</Button>
          <Button type="dashed" size={this.state.size}>LWJ</Button>
          <Button type="danger" size={this.state.size}>LWJ</Button>
          <Button disabled size={this.state.size}>LWJ</Button>
        </Card>
      </div>
    )
  }
}

export default ButtonPage