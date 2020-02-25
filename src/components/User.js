import React, { Component } from 'react';

class User extends Component {
    constructor(props) {
        super(props)
        console.log(props)
        this.state = {
            username: this.props.match.params.username
        };
    };

    render() {
        return (
            <div> User {this.state.username} is logged in</div>
        );
    }
}

export default User;
