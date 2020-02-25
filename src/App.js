import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Dashboard from './components/Dashboard';
import User from './components/User';

//import { BrowserRouter as Router } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
        <Route path="/" exact strict component={Home} />
        <Route path="/about" component={About} />
        <Route path="/dashboard" component={Dashboard} />

        <Route path="/user/:username" component={User} />

      </div>
    </Router>
  );
}

export default App;
