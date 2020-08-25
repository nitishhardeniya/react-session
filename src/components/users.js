import React from 'react';
import Card from './card';
import Search from  './search';

class Users extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            apiData: [],
            users: [],
        }
        this._searchChange = this._searchChange.bind(this);
    }

    componentDidMount() {
        //Api call
        fetch('https://api.github.com/users')
            .then(data => data.json())
            .then(users => {
                this.setState({
                    users,
                    apiData: users
                })
            })
    }

    _searchChange(val) {
        const data = this.state.users.filter(user => user.login.includes(val));
        console.log(val)
        if(val.length === 0) {
            console.log(this.state.apiData)
            this.setState({
                users: this.state.apiData
            })
        } else {
            this.setState({
                users: data
            })
        }
    }
    

    render() {
        return <div className="main-content">
            <Search onSearchChange={this._searchChange}/>
            {this.state.users && this.state.users.map(users => <Card username={users.login} profilePath={users.html_url} avatar={users.avatar_url} />)}
        </div>
    }
}

export default Users;