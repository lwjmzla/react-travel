import React from 'react'
import MenuList from 'config/menuConfig.js'
import { Menu, Icon } from 'antd';
import { Link, NavLink } from 'react-router-dom'
import style from './index.less'
import axios from 'axios'
const SubMenu = Menu.SubMenu;
const MenuItem = Menu.Item;
class NavLeft extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      // menuTreeNode: []
      firstLoad: true,
      MenuList: []
    }
  }
  componentWillMount() {
    // !ajax  MenuList 为数据
    // const menuTreeNode = this.renderMenu(MenuList)
    axios.get('https://easy-mock.com/mock/5a1152db868584562f60c7b5/example/detail').then((res) => {
      // console.log(res)
      // !这里ajax获取MenuList
      // const menuTreeNode = this.renderMenu(MenuList) // 强行 重新渲染
      this.setState({
        MenuList
      })
    })
  }
  handleClickItem = (ev) => {
    this.setState({
      firstLoad: false
    })
  }
  renderMenu = (data) => {
    const menuTreeNode = data.map((item, index) => {
      if (item.children) {
        return (
          <SubMenu title={item.title} key={item.key}>
            { this.renderMenu(item.children) }
          </SubMenu>
        )
      } else {
        // console.log(this.props.location.pathname === item.key)  这里 只是 初始化的时候 执行一次
        return ( // !看看刷新页面的时候 怎么让 导航 也加上 active的状态  ant-menu-item-selected
          <MenuItem key={item.key} onClick={this.handleClickItem} className={this.props.location.pathname === item.key && this.state.firstLoad ? 'ant-menu-item-selected' : ''}>
            <NavLink to={item.key} >{item.title}</NavLink>
          </MenuItem>
        )
      }
    })
    return menuTreeNode
  }
  render(){
    const menuTreeNode = this.renderMenu(this.state.MenuList)
    return (
      <div>
        <div className={style.logo}>
          <img src="/assets/logo-ant.svg" alt="" />
          <h1>Imooc MS</h1>
        </div>
        <Menu mode="vertical" theme="dark">
          { menuTreeNode }
        </Menu>
      </div>
    )
  }
}

export default NavLeft