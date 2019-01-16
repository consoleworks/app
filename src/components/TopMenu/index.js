import React from 'react';
import { Menu, Icon, Input } from 'antd';
import './index.less';
import Triangular from '../../assets/triangular.svg';
const Search = Input.Search;

export default () => (
    <Menu
        mode="horizontal"
    >
        <Menu.Item key="logo" className="menu-item">
            <img src={Triangular} className="logo" alt="" />
        </Menu.Item>
        <Menu.Item key="search" className="menu-item search">
            <Search
                size="large"
                placeholder="input search text"
                onSearch={value => console.log(value)}
                style={{ width: '50vw' }}
            />
        </Menu.Item>
        <Menu.Item key="user" className="menu-item menu-item-right">
            <Icon type="user" />
        </Menu.Item>
    </Menu>
)