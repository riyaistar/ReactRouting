import React, { Component } from 'react';
import Dashboard from './Dashboard';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import FunctionalComp from './Functional';

class Home extends Component {

    constructor(props) {
        super(props)

        this.state = {
            loggedIn: false
        };
    };

    gotoFunc = () => {
        this.props.history.push({
            pathname: '/func',
            state: this.state.loggedIn
        });
    }

    gotoDashboard = () => {
        this.props.history.push({
            pathname: '/dashboard',
            state: this.state.loggedIn
        });

    }
    try = () => {
        this.props.history.push('/dashboard');

    }
    routeToUsers = () => {
        var key = document.getElementById('userbtn').dataset.key
        this.props.history.push('/user/' + key);

    }

    handleloggedIn = () => {
        console.log(this.state.loggedIn)
        this.setState(prevState => ({
            loggedIn: !prevState.loggedIn
        }))
    }

    render() {
        return (
            <div>
                <FunctionalComp />
                <div> Home Component </div>
                <div className="d-flex flex-column align-items-center">
                    <button onClick={this.try} className="btn text-danger w-25">Dashboard</button>
                    <button onClick={this.routeToUsers} id="userbtn" data-key="reee" className="btn text-danger w-25">Users</button>
                    <button onClick={this.gotoFunc} className="btn text-danger w-25">Functional</button>


                </div>
            </div>
        );
    }
}

export default Home;
