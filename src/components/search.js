import React from 'react'

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchStr : ''
        }
        this.onInputChange = this.onInputChange.bind(this);
    }

    onInputChange(str) {
        this.setState({
            searchStr: str
        }, () => {
            this.props.onSearchChange(str);
        });
    }

    render() {
        return <div>
                <input className="input-text" type="text" value={this.state.searchStr} onChange={(e) => this.onInputChange(e.target.value)} />
            </div>
    }
}

export default Search;