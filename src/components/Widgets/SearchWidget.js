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
            const searchResult = props.action({ id: value, ...props });
            this.setState({ hasResult: true, result: searchResult });
        }
    }
    render() {
        return !this.state.hasResult ? (
            <Search
                onSearch={this.onSearch(this.props)}
                style={{ width: 200 }}
            />
        ) : (
                <div>
                    <Search
                        onSearch={this.onSearch(this.props)}
                        style={{ width: 200 }}
                    />
                    {SearchResultDisplay(this.state.result)}
                </div>
            )
    }
}
export const SearchResultDisplay = (result) => (
    <div>{JSON.stringify(result)}</div>
)