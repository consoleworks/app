import React from 'react';
import { Input } from 'antd';

const Search = Input.Search;
export const SearchWidget = (props) => (
    <Search
        placeholder="input search text"
        onSearch={value => props.action({ id: value, ...props })}
        style={{ width: 200 }}
    />
)
