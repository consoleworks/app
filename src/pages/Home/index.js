import React from 'react';
import GridLayout from 'react-grid-layout';
import './index.less';
import Widget from '../../components/Widget';

export default class Home extends React.Component {
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
                <div className="grid-item" key="a">
                    <Widget title="Dynamo DB" />
                </div>
                <div className="grid-item" key="b">
                    <Widget title="EC2" />
                </div>
                <div className="grid-item" key="c">
                    <Widget title="S3" />
                </div>
                <div className="grid-item" key="d">
                    <Widget title="Cloud Watch" />
                </div>
            </GridLayout>
        )
    }
}