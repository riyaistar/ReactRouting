import React, { Component } from 'react';
import FunctionalComp from './Functional';

class Dashboard extends Component {
  constructor(props) {
    super(props)
    console.log(props)
  };

  render() {
    return (

      <div>
        <FunctionalComp />
        Dashboard Component
        
      </div>
    );
  }
}

export default Dashboard;
