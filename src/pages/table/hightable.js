import React from 'react'
import { Card, Button, notification, message, Table, Badge, Modal } from 'antd';
import style from './ui.less'
import ajax from 'api/ajax.js'

const columns2 = [
  {
    title: 'id',
    dataIndex: 'id',
    key: 'id',
    width: 80,
    fixed: 'left'
  },
  {
    title: '用户名',
    dataIndex: 'username',
    key: 'username',
    width: 80,
    fixed: 'left'
  },
  {
    title: '性别',
    dataIndex: 'sex',
    key: 'sex',
    render (sex) {
      return sex === 1 ? '男' : '女'
    },
    width: 80
  },
  {
    title: '性别',
    dataIndex: 'sex',
    key: 'sex',
    render (sex) {
      return sex === 1 ? '男' : '女'
    },
    width: 80
  },
  {
    title: '性别',
    dataIndex: 'sex',
    key: 'sex',
    render (sex) {
      return sex === 1 ? '男' : '女'
    },
    width: 80
  },
  {
    title: '性别',
    dataIndex: 'sex',
    key: 'sex',
    render (sex) {
      return sex === 1 ? '男' : '女'
    },
    width: 80
  },
  {
    title: '性别',
    dataIndex: 'sex',
    key: 'sex',
    render (sex) {
      return sex === 1 ? '男' : '女'
    },
    width: 80
  },
  {
    title: '性别',
    dataIndex: 'sex',
    key: 'sex',
    render (sex) {
      return sex === 1 ? '男' : '女'
    },
    width: 80
  },
  {
    title: '性别',
    dataIndex: 'sex',
    key: 'sex',
    render (sex) {
      return sex === 1 ? '男' : '女'
    },
    width: 80
  },
  {
    title: '性别',
    dataIndex: 'sex',
    key: 'sex',
    render (sex) {
      return sex === 1 ? '男' : '女'
    },
    width: 80
  },
  {
    title: '性别',
    dataIndex: 'sex',
    key: 'sex',
    render (sex) {
      return sex === 1 ? '男' : '女'
    },
    width: 80
  },
  {
    title: '性别',
    dataIndex: 'sex',
    key: 'sex',
    render (sex) {
      return sex === 1 ? '男' : '女'
    },
    width: 80
  },
  {
    title: '性别',
    dataIndex: 'sex',
    key: 'sex',
    render (sex) {
      return sex === 1 ? '男' : '女'
    },
    width: 80
  },
  {
    title: '状态',
    dataIndex: 'state',
    key: 'state',
    render (state) {
      return stateMap[state-1]
    },
    width: 120
  },
  {
    title: '兴趣',
    dataIndex: 'interest',
    key: 'interest',
    render (interest) {
      return interestMap[interest-1]
    },
    width: 120
  },
  {
    title: '婚姻状况',
    dataIndex: 'isMarried',
    key: 'isMarried',
    render (isMarried) {
      return isMarried === 1 ? '已婚' : '未婚'
    },
    width: 100
  },
  {
    title: '生日',
    dataIndex: 'birthday',
    key: 'birthday',
    width: 120
  },
  {
    title: '地址',
    dataIndex: 'address',
    key: 'address',
    width: 500
  },
  {
    title: '起床时间',
    dataIndex: 'time',
    key: 'time',
    width: 120,
    fixed: 'right'
  }
];
const stateMap = ['状态1','状态2','状态3','状态4','状态5']
const interestMap = ['爱好1','爱好2','爱好3','爱好4','爱好5','爱好6','爱好7','爱好8']
class Base extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      dataSource1: [],
      selectedRowKeys: [],
      selectedRowKeysCheck: [],
      pagination: {}
    }
  }
  componentWillMount() {
    this.getAjaxData()
  }

  handleDelete = (item, index) => {
    console.log(item)
    console.log(index)
    Modal.confirm({
      title: 'xxx',
      content: 'xxx',
      onOk: () => {
        console.log('ok')
      }
    })
  }

  getAjaxData = (page) => {
    ajax({
      type: 'get',
      url: '/table/list1',
      data: {page: page || 1}
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
        this.setState({ 
          dataSource1,
          pagination: {
            onChange: (page, pageSize) => {
              console.log(page)
              this.getAjaxData(page)
            },
            current: res.result.page,
            pageSize: res.result.page_size,
            total: res.result.total,
            showTotal: () => {
              return `共${res.result.total}条数据`
            },
            showQuickJumper: true,
            //showSizeChanger: true
          }
        })
      }
    })
  }


  render(){
    const columns = [
      {
        title: 'id',
        dataIndex: 'id',
        key: 'id',
        width: 80,
        sorter: (a, b) => a.id - b.id,
        defaultSortOrder: 'descend',
      },
      {
        title: '用户名',
        dataIndex: 'username',
        key: 'username',
        width: 80
      },
      {
        title: '性别',
        dataIndex: 'sex',
        key: 'sex',
        render (sex) {
          return sex === 1 ? '男' : '女'
        },
        width: 80
      },
      {
        title: '状态',
        dataIndex: 'state',
        key: 'state',
        render (state) {
          return <Badge status="success" text={stateMap[state-1]} />
        },
        width: 120
      },
      {
        title: '兴趣',
        dataIndex: 'interest',
        key: 'interest',
        render (interest) {
          return interestMap[interest-1]
        },
        width: 120
      },
      {
        title: '婚姻状况',
        dataIndex: 'isMarried',
        key: 'isMarried',
        render (isMarried) {
          return isMarried === 1 ? '已婚' : '未婚'
        },
        width: 100
      },
      {
        title: '生日',
        dataIndex: 'birthday',
        key: 'birthday',
        width: 120
      },
      {
        title: '地址',
        dataIndex: 'address',
        key: 'address',
        width: 500
      },
      {
        title: '起床时间',
        dataIndex: 'time',
        key: 'time',
        width: 120
      },
      {
        title: '操作',
        render: (text, item, index) => {
          return <Button type="primary" onClick={() => { this.handleDelete(item, index) }}>删除</Button>
        }
      },
    ];
    // ! 设置 scroll的话 要给 columns加 width 
    return (
      <div>
        <Card title="排序和操作" className={style['card-wrap']}>
          <Table dataSource={this.state.dataSource1} columns={columns} bordered pagination={this.state.pagination}  />
        </Card>
        <Card title="左侧固定" className={style['card-wrap']}>
          <Table dataSource={this.state.dataSource1} columns={columns2} bordered pagination={this.state.pagination} scroll={{ x: 2120,y: 240   }} />
        </Card>
      </div>
    )
  }
}

export default Base