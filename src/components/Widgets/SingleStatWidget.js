import React from "react";
import { Card } from 'antd';

export const SingleStatWidget = (props) => {
    let actionResult = props.action({ ...props });
    if (props.transform) {
        actionResult = props.transform(actionResult);
    }
    const background = props.background || "#ffffff";
    const color = props.color || "#000000";
    return (
        <Card
            style={{ margin: 10, background, color, borderRadius: 3 }}
            size="small"
        >
            {actionResult}
        </Card>
    )
} 