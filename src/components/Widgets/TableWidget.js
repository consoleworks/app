import React from 'react';
import ReactDataGrid from 'react-data-grid';

const columns = [
    { key: 'id', name: 'ID' },
    { key: 'title', name: 'Title' },
    { key: 'count', name: 'Count' }];

const rows = [
    { id: 0, title: 'row1', count: 20 },
    { id: 1, title: 'row1', count: 40 },
    { id: 2, title: 'row1', count: 60 },
    { id: 3, title: 'row1', count: 60 },
    { id: 4, title: 'row1', count: 60 },
    { id: 5, title: 'row1', count: 60 },
    { id: 6, title: 'row1', count: 60 },
    { id: 7, title: 'row1', count: 60 },
    { id: 8, title: 'row1', count: 60 },
    { id: 9, title: 'row1', count: 60 },
    { id: 10, title: 'row1', count: 60 },
    { id: 11, title: 'row1', count: 60 },
    { id: 12, title: 'row1', count: 60 },
    { id: 13, title: 'row1', count: 60 },
    { id: 14, title: 'row1', count: 60 },
    { id: 15, title: 'row1', count: 60 },
];

export const Table = () => (<ReactDataGrid
    columns={columns}
    rowGetter={i => rows[i]}
    rowsCount={11} />)
