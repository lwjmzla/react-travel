import React from 'react'
import { Card, Tabs, Icon, Button, message } from 'antd';
import style from './ui.less'
const TabPane = Tabs.TabPane;
class Tab extends React.Component{
  constructor(props){
    super(props)
    this.newTabIndex = 0;
    const panes = [
      { title: 'Tab 1', content: 'Content of Tab 1', key: '1' },
      { title: 'Tab 2', content: 'Content of Tab 2', key: '2' },
      {
        title: 'Tab 3', content: 'Content of Tab 3', key: '3', closable: false,
      },
    ];
    this.state = {
      activeKey: panes[0].key,
      panes,
    };
  }
  onChange = (activeKey) => {
    this.setState({ activeKey });
    message.success('你选择了activeKey'+ activeKey)
  }

  onEdit = (targetKey, action) => {
    console.log(targetKey) // 1 2 3
    console.log(action) // remove add
    this[action](targetKey);
  }

  add = () => {
    console.log(1111)
    const panes = this.state.panes;
    if (panes.length === 8) {
      console.log('tab数量最多为8')
      return
    }
    const activeKey = `newTab${this.newTabIndex++}`;
    panes.push({ title: 'New Tab', content: 'Content of new Tab', key: activeKey });
    this.setState({ panes, activeKey });
  }

  remove = (targetKey) => {
    console.log(2222)
    let activeKey = this.state.activeKey;
    let lastIndex;
    // this.state.panes.forEach((pane, i) => {
    //   if (pane.key === targetKey) {
    //     lastIndex = i - 1; // ! 不知干嘛
    //   }
    // });
    const panes = this.state.panes.filter(pane => pane.key !== targetKey);
    // if (panes.length && activeKey === targetKey) {
    //   if (lastIndex >= 0) {
    //     activeKey = panes[lastIndex].key;
    //   } else {
    //     activeKey = panes[0].key;
    //   }
    // }
    this.state.panes.forEach((item, index) => {
      if (item.key === targetKey) {
        lastIndex = index // !最后点击时的index
      }
    })
    if (targetKey === activeKey) { // ! activeKey的设置   当前删除 的是active 才要处理
      if (lastIndex === 0) {
        activeKey = this.state.panes[1].key
      } else {
        activeKey = this.state.panes[lastIndex-1].key
      }
    }
    this.setState({ panes, activeKey });
  }

  render(){
    return (
      <div>
        <Card title="Tab带图标页签" className={style['card-wrap']}>
          <Tabs defaultActiveKey="2" animated={false}>
            <TabPane tab={<span><Icon type="apple" />Tab 1</span>} key="1">
              Tab 1
            </TabPane>
            <TabPane tab={<span><Icon type="android" />Tab 2</span>} key="2">
              Tab 2
            </TabPane>
            <TabPane disabled  tab={<span><Icon type="apple" />Tab 3</span>} key="3">
              Tab 3
            </TabPane>
          </Tabs>
        </Card>
        <Card title="Tab可关闭卡片式页签" className={style['card-wrap']}>
          <div style={{ marginBottom: 16 }}>
            <Button onClick={this.add}>ADD</Button>
          </div>
          <Tabs onChange={this.onChange} activeKey={this.state.activeKey} type="editable-card" onEdit={this.onEdit} hideAdd>
            {this.state.panes.map(pane => <TabPane tab={pane.title} key={pane.key} closable={pane.closable}>{pane.content}</TabPane>)}
          </Tabs>
        </Card>
      </div>
    )
  }
}

export default Tab