import React from 'react';
import Widget from './index';
import { Tabs } from 'antd';
import { ProgressWidget } from '../Widgets/ProgressWidget';
const TabPane = Tabs.TabPane;

export default () => (
    <Widget title="S3" >
        <ProgressWidget percent={50} status="active" title="Sprint Progress" />
        <ProgressWidget percent={100} status="success" title="Code Coverage" />
        <ProgressWidget percent={20} status="exception" title="Deployment Status" />
    </Widget>
)