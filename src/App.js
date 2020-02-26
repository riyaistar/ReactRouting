import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/route1/Home';
import About from './components/route1/About';
import Dashboard from './components/route1/Dashboard';
import User from './components/route1/User';
import FunctionalComp from './components/route1/Functional';
import CustomNavbar from './components/ROUTE2/CustomNavbar';
import Home2 from './components/ROUTE2/Home2';
import About2 from './components/ROUTE2/About2';
import Topic from './components/ROUTE2/Topic';
import User2 from './components/ROUTE2/UserList';

//import { BrowserRouter as Router } from 'react-router-dom'

function App() {

  return (
    <Router>
      <div className="App">
        {/* <Route path="/" exact strict component={Home} />
        <Route path="/about" component={About} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/func" component={FunctionalComp} />
        <Route path="/user/:username" component={User} /> */}
        <Route path="/" component={CustomNavbar} />
        <Route path="/home" component={Home2} />

        <Route path="/about" component={About2} />
        <Route path="/about/:topicid" component={Topic} />

        <Route path="/user" component={User2} />
      </div>
    </Router>

  );
}

export default App;