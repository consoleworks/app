import React from "react";

import { Progress, Card } from 'antd';

export const ProgressWidget = (props) => (
    <Card style={{ margin: 10 }} size="small" title={props.title} >
        <Progress percent={props.percent} status={props.status} type={props.type || "line"} />
    </Card>
)