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
            { i: 'a', x: 0, y: 0, w: 1, h: 1 },
            { i: 'b', x: 1, y: 0, w: 1, h: 1 },
            { i: 'c', x: 1, y: 1, w: 1, h: 1 }
        ];
        return (
            <GridLayout className="layout" layout={layout} cols={4} rowHeight={height / 4} width={width}>
                <div className="grid-item" key="a">
                    <Widget />
                </div>
                <div className="grid-item" key="b">
                    <Widget />
                </div>
                <div className="grid-item" key="c">
                    <Widget />
                </div>
            </GridLayout>
        )
    }
}