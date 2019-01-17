import React from 'react';
import Widget from './index';
import { SearchWidget } from "../Widgets/SearchWidget";
import { SingleStatWidget } from "../Widgets/SingleStatWidget";
import { getItem } from '../../actions/GetItem';
import { topCommitSha } from '../../actions/TopCommitSha';

export default () => (
    <Widget title="Dynamo DB" >
        <SearchWidget action={getItem} tableName="Purchase Session" transform={data => data.id} />
        <SingleStatWidget background="#673ab7" color="#fff" action={topCommitSha} />
        <SingleStatWidget action={getItem} tableName="Purchase Session" id="123" transform={JSON.stringify} trigger={{ on: "complete", of: "purchase-session-search", if: (data) => true }} />
    </Widget>
)