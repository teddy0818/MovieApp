import React, { useState, useEffect } from 'react';
import LeftMenu from './Sections/LeftMenu';
import RightMenu from './Sections/RightMenu';
import { Input, Drawer, Button, Icon } from 'antd';
import './Sections/Navbar.css';
import BadMovie from '../../../image/BadMovie.png';
import { API_URL, API_KEY, IMAGE_BASE_URL} from "../../Config";
import { withRouter } from 'react-router-dom';

function NavBar(props) {
  const [visible, setVisible] = useState(false)

  const handleChange = (value, event) => {
    window.location.replace(`/searchpage/${value}`)
    // props.history.push(`/searchpage/${value}`);
  }

  const showDrawer = () => {
    setVisible(true)
  };

  const onClose = () => {
    setVisible(false)
  };

  return (

    <nav className="menu" style={{ position: 'fixed', zIndex: 5, width: '100%' }}>
      <a href="/">
      <div className="menu__logo">
          <img src={BadMovie} style={{width:"100px", height:"50px", marginTop:'5px'}} />
      </div>
      </a>
      <div className="menu__container">
        <div className="menu_left">
          <LeftMenu mode="horizontal" />
        </div>
        <div className="menu_rigth">
          <RightMenu mode="horizontal" />
        </div>
        <div className="menu_search">
          <Input.Search
            placeholder="영화 제목을 검색해보세요"
            allowClear
            maxLength={20}
            enterButton="검색"
            size="large"
            onSearch={handleChange}
          />
        </div>
        <Button
          className="menu__mobile-button"
          type="primary"
          onClick={showDrawer}
        >
          <Icon type="align-right" />
        </Button>
        <Drawer
          title="메뉴"
          placement="right"
          className="menu_drawer"
          closable={false}
          onClose={onClose}
          visible={visible}
        >
          <LeftMenu mode="inline" />
          <RightMenu mode="inline" />
        </Drawer>
      </div>
    </nav>
  )
}

export default withRouter(NavBar)