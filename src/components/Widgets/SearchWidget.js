import React from 'react';
import { Input } from 'antd';

const Search = Input.Search;
export class SearchWidget extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasResult: false, result: null }
    }
    onSearch(props) {
        return value => {
            let searchResult = props.action({ id: value, ...props });
            const { transform } = this.props;
            if (transform) {
                searchResult = transform(searchResult);
            }
            this.setState({ hasResult: true, result: searchResult });
        }
    }
    render() {
        const search = (
            <Search
                onMouseDown={e => e.stopPropagation()}
                onSearch={this.onSearch(this.props)}
                style={{ width: 200, marginRight: 10 }}
            />
        )
        return !this.state.hasResult ? search : (
            <div>
                {search}
                {SearchResultDisplay(this.state.result)}
            </div>
        )
    }
}
export const SearchResultDisplay = (result) => (
    <div>{JSON.stringify(result)}</div>
)