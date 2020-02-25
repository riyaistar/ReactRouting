import React, { Component } from 'react';
import Dashboard from './Dashboard';
import { Route } from 'react-router-dom';

class Home extends Component {

    constructor(props) {
        super(props)

        this.state = {
            isAllowed: false
        };
    };

    try = () => {
        if (this.state.isAllowed) {
            this.props.history.push('/dashboard');
        }
    }
    routeToUsers = () => {
        if (this.state.isAllowed) {
            var key = document.getElementById('userbtn').dataset.key
            this.props.history.push('/user/' + key);
        }
    }
    allowRouting = () => {
        this.setState({
            isAllowed: true
        })
    }
    render() {
        return (
            <div>
                <div> Home Component </div>
                <div className="d-flex flex-column align-items-center">
                    <button onClick={this.try} className="btn text-danger w-25">Dashboard</button>
                    <button onClick={this.routeToUsers} id="userbtn" data-key="reee" className="btn text-danger w-25">Users</button>
                    <button className="btn text-danger w-25">About</button>
                </div>
                <button onClick={this.allowRouting}>Allow Routing</button>
            </div>
        );
    }
}

export default Home;
