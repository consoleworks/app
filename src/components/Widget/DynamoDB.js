import React from 'react';
import { Row, Col } from "antd";
import Widget from './index';
import { SearchWidget } from "../Widgets/SearchWidget";
import { SingleStatWidget } from "../Widgets/SingleStatWidget";
import { getItem } from '../../actions/GetItem';
import { topCommitSha } from '../../actions/TopCommitSha';
import { Table } from '../Widgets/TableWidget';
export default () => (
    <Widget title="Dynamo DB" >
        <Row gutter={48}>
            <Col span={12}>
                <SearchWidget action={getItem} tableName="Purchase Session" transform={data => data.id} />
            </Col>
            <Col span={12}>
                <SingleStatWidget action={topCommitSha} />
            </Col>
        </Row>

        <SingleStatWidget action={getItem} tableName="Purchase Session" id="123" transform={JSON.stringify} />
        <SingleStatWidget action={getItem} tableName="Purchase Session" id="123" transform={JSON.stringify} />
        <SingleStatWidget action={getItem} tableName="Purchase Session" id="123" transform={JSON.stringify} />
        <SingleStatWidget action={getItem} tableName="Purchase Session" id="123" transform={JSON.stringify} />
        <SingleStatWidget action={getItem} tableName="Purchase Session" id="123" transform={JSON.stringify} />
        <SingleStatWidget action={getItem} tableName="Purchase Session" id="123" transform={JSON.stringify} />
        <SingleStatWidget action={getItem} tableName="Purchase Session" id="123" transform={JSON.stringify} />
        <SingleStatWidget action={getItem} tableName="Purchase Session" id="123" transform={JSON.stringify} />
        <SingleStatWidget action={getItem} tableName="Purchase Session" id="123" transform={JSON.stringify} />
        <SingleStatWidget action={getItem} tableName="Purchase Session" id="123" transform={JSON.stringify} />
        <SingleStatWidget action={getItem} tableName="Purchase Session" id="123" transform={JSON.stringify} />

        <Row>
            <Col span={24}>
                <Table />
            </Col>
        </Row>
    </Widget>
)