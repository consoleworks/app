import React from 'react';
import './index.less';
import { Card, Row, Col } from 'antd';

const extras = (
    <i className="extras fa fa-clone"></i>
)

export default ({ title, children }) => (
    <div className="widget">
        <Card
            size="small"
            title={title}
            extra={extras}
        >
            {children}
        </Card>
    </div>
)