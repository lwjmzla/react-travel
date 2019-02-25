import React from 'react'
import { Card, Button, Spin, Icon, Alert, Switch } from 'antd';
import style from './ui.less'
const antIcon = <Icon type="loading" style={{ fontSize: 24 }} spin />;
class Loading extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      loading: false
    }
  }
  toggle = () => {
    this.setState({
      loading: !this.state.loading
    })
  }
  render(){
    return (
      <div>
        <Card title="Spin用法" className={style['card-wrap']}>
          <Spin size="small" />
          <Spin tip="loading..." />
          <Spin size="large" />
          <Spin indicator={antIcon} />
        </Card>
        <Card title="内容遮罩" className={style['card-wrap']}>
          <Spin spinning={this.state.loading} tip="loading...">
            <Alert
              message="Alert message title"
              description="Further details about the context of this alert."
              type="info"
            />
          </Spin>
          <div style={{ marginTop: 16 }}>
            Loading state：<Switch checked={this.state.loading} onChange={this.toggle} />
          </div>
        </Card>
      </div>
    )
  }
}

export default Loading