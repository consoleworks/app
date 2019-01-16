import React from 'react';
import './index.less';
import { Card } from 'antd';
export default () => (
    <Card
        size="small"
        title="Small size card"
        extra={<a href="#">More</a>}
    >
        <p>Card content</p>
        <p>Card content</p>
        <p>Card content</p>
    </Card>
)