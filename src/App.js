import React, { Component } from 'react';
import Home from './Home';
import Login from './Login';
import Nav from './Nav'


export default class App extends Component {
  constructor(){
    super();
    
  }
  render() {
    return (
      <div>
        <Nav />
        <Home />
        {/* <Login /> */}
      </div>
    )
  }
}

