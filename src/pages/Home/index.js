import React from 'react';
import GridLayout from 'react-grid-layout';
import './index.less';
import Widget from '../../components/Widget';
import DynamoDB from '../../components/Widget/DynamoDB';
import EC2 from '../../components/Widget/EC2';
import S3 from '../../components/Widget/S3';
import { getTopItem } from '../../config/actions/dynamodb';
import { ProgressWidget } from '../../components/Widgets/ProgressWidget';

export default class Home extends React.Component {
    constructor() {
        super();
        this.state = { data: [], isDraggable: false };
    }
    componentDidMount() {
        getTopItem()
            .then(json => this.setState({ data: json }));
    }
    render() {
        const width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
        const height = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
        // layout is an array of objects, see the demo for more complete usage
        var layout = [
            { i: 'a', x: 0, y: 0, w: 2, h: 2 },
            { i: 'b', x: 2, y: 0, w: 2, h: 2 },
            { i: 'c', x: 0, y: 2, w: 2, h: 2 },
            { i: 'd', x: 2, y: 2, w: 2, h: 2 },
        ];
        return (
            <GridLayout className="layout" layout={layout} cols={4} rowHeight={height / 4} width={width}>
                <div className="grid-item" key="a" onMouseDown={e => e.stopPropagation()}>
                    <DynamoDB />
                </div>
                <div className="grid-item" key="b" onMouseDown={e => e.stopPropagation()}>
                    <EC2 />
                </div>
                <div className="grid-item" key="c" onMouseDown={e => e.stopPropagation()}>
                    <S3 />
                </div>
                <div className="grid-item" key="d" onMouseDown={e => e.stopPropagation()}>
                    <Widget title="Payment Gateway">
                        <ProgressWidget percent={50} status="active" title="Migration Status" type="circle" />
                        <ProgressWidget percent={1} status="exception" title="Test Coverage" type="circle" />
                    </Widget>
                </div>
            </GridLayout>
        )
    }
}