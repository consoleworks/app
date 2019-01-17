import React from 'react';
import Widget from './index';
import { SearchWidget } from "../Widgets/SearchWidget";
import { SingleStatWidget } from "../Widgets/SingleStatWidget";
import { getItem } from '../../actions/GetItem';
import { topCommitSha } from '../../actions/TopCommitSha';
import { Tabs } from 'antd';
const TabPane = Tabs.TabPane;

export default () => (
    <Widget title="Dynamo DB" >
        <Tabs defaultActiveKey="1">
            <TabPane tab="Table 1" key="1">
                <SearchWidget action={getItem} tableName="Purchase Session" transform={data => data.id} />
                <SingleStatWidget action={topCommitSha} />
                <SingleStatWidget action={getItem} tableName="Purchase Session" id="123" transform={JSON.stringify} />
            </TabPane>
            <TabPane tab="Table 2" key="2">Content of Tab Pane 2</TabPane>
            <TabPane tab="Table 3" key="3">Content of Tab Pane 3</TabPane>
        </Tabs>
    </Widget>
)