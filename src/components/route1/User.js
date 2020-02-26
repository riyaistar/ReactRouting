import React, { Component } from 'react';
import FunctionalComp from './Functional';

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

            <div>
                <FunctionalComp />

                User {this.state.username} is logged in</div>
        );
    }
}

export default User;
