import React from 'react';
import Widget from './index';

import { Tabs } from 'antd';
const TabPane = Tabs.TabPane;

export default () => (
    <Widget title="EC2">
        <Tabs defaultActiveKey="1">
            <TabPane tab="Instances" key="1">Content of Tab Pane 1</TabPane>
            <TabPane tab="Load Balancers" key="2">Content of Tab Pane 2</TabPane>
            <TabPane tab="Security Groups" key="3">Content of Tab Pane 3</TabPane>
        </Tabs>
    </Widget>
)