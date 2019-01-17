import React from 'react';
import './index.less';
import { Card, Button, Icon, Dropdown, Menu, Row, Col, Tabs, Input, Select } from 'antd';
const ButtonGroup = Button.Group;
const TabPane = Tabs.TabPane;
const Search = Input.Search;
const Option = Select.Option;


const menu = (
    <Menu >
        <Menu.Item key="1"><i className="fa fa-clone"></i><span>   Clone</span></Menu.Item>
        <Menu.Item key="2"><Icon type="user" />2nd menu item</Menu.Item>
        <Menu.Item key="3"><Icon type="user" />3rd item</Menu.Item>
    </Menu>
);
const extras = (
    <i className="extras fa fa-clone"></i>
)
const titleMenu = (title, titleMenuItems) => (
    <Row>
        <Col span={8}>{title}</Col>
        <Col span={16}>
            {
                titleMenuItems.map((item, index) => <span key={index}>{item}</span>)
            }
        </Col>
    </Row>
)

export default ({ title, titleMenuItems, children }) => (
    <Card
        className="widget"
        size="small"
        title={titleMenu(title, titleMenuItems)}
        extra={extras}
    >
        {children}
    </Card>
)