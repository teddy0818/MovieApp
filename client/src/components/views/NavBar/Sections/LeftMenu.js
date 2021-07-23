import React from 'react';
import { Menu } from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

function LeftMenu(props) {
  return (
    <Menu mode={props.mode}>
    {/* <Menu.Item key="mail">
      <a href="/">Home</a>
    </Menu.Item> */}
    <Menu.Item>
      <a href="/favorite">즐겨찾기</a>
    </Menu.Item>
  </Menu>
  )
}

export default LeftMenu