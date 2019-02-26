import React from 'react'
import { Card, Button, notification, message, Table } from 'antd';
import style from './ui.less'
import ajax from 'api/ajax.js'
const columns = [
  {
    title: 'id',
    dataIndex: 'id',
    key: 'id'
  },
  {
    title: '用户名',
    dataIndex: 'username',
    key: 'username'
  },
  {
    title: '性别',
    dataIndex: 'sex',
    key: 'sex',
    render (sex) {
      return sex === 1 ? '男' : '女'
    }
  },
  {
    title: '状态',
    dataIndex: 'state',
    key: 'state',
    render (state) {
      return stateMap[state-1]
    }
  },
  {
    title: '兴趣',
    dataIndex: 'interest',
    key: 'interest',
    render (interest) {
      return interestMap[interest-1]
    }
  },
  {
    title: '婚姻状况',
    dataIndex: 'isMarried',
    key: 'isMarried',
    render (isMarried) {
      return isMarried === 1 ? '已婚' : '未婚'
    }
  },
  {
    title: '生日',
    dataIndex: 'birthday',
    key: 'birthday'
  },
  {
    title: '地址',
    dataIndex: 'address',
    key: 'address'
  },
  {
    title: '起床时间',
    dataIndex: 'time',
    key: 'time'
  }
];
const stateMap = ['状态1','状态2','状态3','状态4','状态5']
const interestMap = ['爱好1','爱好2','爱好3','爱好4','爱好5','爱好6','爱好7','爱好8']
class Base extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      dataSource1: []
    }
  }
  componentWillMount() {
    ajax({
      type: 'get',
      url: '/table/list1',
      data: {page: 1}
    }).then((res) => {
      if (res.code === 0) {
        let dataSource1 = res.result.list
        // ! 直接 columns render可以转换数据
        // dataSource1 = dataSource1.map((item) => {
        //   return {
        //     "id": item.id,
        //     "username": item.username,
        //     "sex": item.sex === 1 ? '男' : '女',
        //     "state": stateMap[item.state-1],
        //     "interest": interestMap[item.interest-1],
        //     "isMarried": item.isMarried === 1 ? '已婚' : '未婚',
        //     "birthday": "2001-01-01",
        //     "address": "广州市白云区XXXXXXXXXX",
        //     "time": "09:00:03"
        //   }
        // })
        // ! Warning: Each record in dataSource of table should have a unique `key` prop, or set `rowKey` of Table to an unique primary key
        dataSource1.forEach((item, index) => {
          item.key = index
        })
        this.setState({ dataSource1 })
      }
    })
  }
  render(){
    const rowSelection = {
      type: 'radio'
    }
    return (
      <div>
        <Card title="基础表格" className={style['card-wrap']}>
          <Table dataSource={this.state.dataSource1} columns={columns} bordered pagination={false} rowSelection={rowSelection}
            onRow={(record) => {
              return {
                onClick: (event) => { console.log(1) },       // 点击行
                onDoubleClick: (event) => {console.log(2)},
                onContextMenu: (event) => {console.log(3)},
                onMouseEnter: (event) => {},  // 鼠标移入行
                onMouseLeave: (event) => {}
              };
            }}
          />
        </Card>
      </div>
    )
  }
}

export default Base