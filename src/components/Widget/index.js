import React from 'react';
import './index.less';
import { Card, Row, Col } from 'antd';

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