import React from "react";
import { Card } from 'antd';

export const SingleStatWidget = (props) => {
    let actionResult = props.action({ ...props });
    if (props.transform) {
        actionResult = props.transform(actionResult);
    }
    return (
        <Card
            style={{ width: 200, margin: 10 }}
            size="small"
        >
            {actionResult}
        </Card>
    )
} 