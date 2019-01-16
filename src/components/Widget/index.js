import React from 'react';
import './index.less';
import { Card, Button, Icon, Dropdown, Menu } from 'antd';
const ButtonGroup = Button.Group;


const menu = (
    <Menu >
        <Menu.Item key="1"><Icon type="user" />1st menu item</Menu.Item>
        <Menu.Item key="2"><Icon type="user" />2nd menu item</Menu.Item>
        <Menu.Item key="3"><Icon type="user" />3rd item</Menu.Item>
    </Menu>
);

const extras = (
    <Dropdown overlay={menu}>
        <Button style={{ marginLeft: 8 }}>
            <Icon type="ellipsis" />
        </Button>
    </Dropdown>
)
export default ({ title }) => (
    <Card
        className="widget"
        size="small"
        title={title}
        extra={extras}
    >
        <i className="fa fa-user"></i>

        <p>Card content</p>
        <p>Card content</p>
        <p>Card content</p>
    </Card>
)