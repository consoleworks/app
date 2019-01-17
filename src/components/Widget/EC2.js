import React from 'react';
import Widget from './index';

import { Tabs, Input, Select } from 'antd';
const TabPane = Tabs.TabPane;
const Search = Input.Search;
const Option = Select.Option;

const titleMenuItems = [
    <Search
        placeholder="Search an Item"
        onSearch={value => console.log(value)}
        style={{ width: 200, marginRight: 10 }}
    />,
    <Select
        showSearch
        defaultValue="us-east-1"
        style={{ width: 200 }}
        placeholder="Select a region"
        optionFilterProp="children"
        filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
    >
        <Option value="us-east-1">us-east-1</Option>
        <Option value="us-east-2">us-east-2</Option>
        <Option value="us-east-3">us-east-3</Option>
    </Select>
]
export default () => (
    <Widget title="EC2" titleMenuItems={titleMenuItems} >
        <Tabs defaultActiveKey="1">
            <TabPane tab="Instances" key="1">Content of Tab Pane 1</TabPane>
            <TabPane tab="Load Balancers" key="2">Content of Tab Pane 2</TabPane>
            <TabPane tab="Security Groups" key="3">Content of Tab Pane 3</TabPane>
        </Tabs>
    </Widget>
)