import React from 'react'
import MenuList from 'config/menuConfig.js'
import { Menu, Icon } from 'antd';
import { Link, NavLink } from 'react-router-dom'
import style from './index.less'
const SubMenu = Menu.SubMenu;
const MenuItem = Menu.Item;
class NavLeft extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      // menuTreeNode: []
    }
  }
  componentWillMount() {
    // !ajax  MenuList 为数据
    const menuTreeNode = this.renderMenu(MenuList)
    this.setState({
      menuTreeNode
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
        return (
          <MenuItem key={item.key}>
            <NavLink to={item.key}>{item.title}</NavLink>
          </MenuItem>
        )
      }
    })
    return menuTreeNode
  }
  render(){
    return (
      <div>
        <div className={style.logo}>
          <img src="/assets/logo-ant.svg" alt="" />
          <h1>Imooc MS</h1>
        </div>
        <Menu mode="vertical" theme="dark">
          { this.state.menuTreeNode }
        </Menu>
      </div>
    )
  }
}

export default NavLeft