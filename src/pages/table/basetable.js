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
      dataSource1: [],
      selectedRowKeys: [],
      selectedRowKeysCheck: [],
      pagination: {}
    }
  }
  componentWillMount() {
    this.getAjaxData()
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


  onClickRow = (ev, record, index) => {
    //console.log(ev.target) 
    //console.log(record)  选择的一条数据信息
    //console.log(index)  
    this.setState({
      selectedRowKeys: [index],
      selectedItem: record
    })
  }
  onClickRowCheck = (ev, record, index) => {
    //console.log(ev.target) 
    console.log(record)  // 选择的一条数据信息
    //console.log(index)  
    let selectedRowKeysCheck = this.state.selectedRowKeysCheck
    if (selectedRowKeysCheck.includes(index)) { // 存在 index
      selectedRowKeysCheck = selectedRowKeysCheck.filter((item) => {
        return item !== index
      })
    } else {
      selectedRowKeysCheck.push(index)
    }
    this.setState({
      selectedRowKeysCheck,
      //selectedItemCheck: record
    })
  }
  render(){
    const _this = this
    const rowSelection = {
      type: 'radio',
      selectedRowKeys: this.state.selectedRowKeys,
      onChange: function(selectedRowKeys, selectedRows) {
        _this.setState({
          selectedRowKeys
        })
        console.log(selectedRowKeys)
        console.log(selectedRows)
      },
      onSelect: function(record, selected, selectedRows, nativeEvent) {
        // console.log(record)
        // console.log(selected) // true
        // console.log(selectedRows)
        // console.log(nativeEvent)
      }
    }
    const rowSelectionCheck = {
      type: 'checkbox',
      selectedRowKeys: this.state.selectedRowKeysCheck,
      onChange: function(selectedRowKeys, selectedRows) {
        _this.setState({
          selectedRowKeysCheck: selectedRowKeys
        })
        console.log(selectedRowKeys)
        console.log(selectedRows)
      },
      onSelect: function(record, selected, selectedRows, nativeEvent) {
        // console.log(record)
        // console.log(selected) // true
        // console.log(selectedRows)
        // console.log(nativeEvent)
      }
    }
    return (
      <div>
        <Card title="单选表格" className={style['card-wrap']}>
          <Table dataSource={this.state.dataSource1} columns={columns} bordered pagination={false} rowSelection={rowSelection}
            onRow={(record, index) => {
              return {
                onClick: (ev) => { this.onClickRow(ev, record, index) },       // 点击行
                onDoubleClick: (ev) => {console.log(2)},
                onContextMenu: (ev) => {console.log(3)},
                onMouseEnter: (ev) => {},  // 鼠标移入行
                onMouseLeave: (ev) => {}
              };
            }}
          />
        </Card>
        <Card title="多选表格" className={style['card-wrap']}>
          <Table dataSource={this.state.dataSource1} columns={columns} bordered pagination={false} rowSelection={rowSelectionCheck}
            onRow={(record, index) => {
              return {
                onClick: (ev) => { this.onClickRowCheck(ev, record, index) },       // 点击行
                onDoubleClick: (ev) => {console.log(2)},
                onContextMenu: (ev) => {console.log(3)},
                onMouseEnter: (ev) => {},  // 鼠标移入行
                onMouseLeave: (ev) => {}
              };
            }}
          />
        </Card>
        <Card title="表格分页" className={style['card-wrap']}>
          <Table dataSource={this.state.dataSource1} columns={columns} bordered pagination={this.state.pagination} />
        </Card>
      </div>
    )
  }
}

export default Base