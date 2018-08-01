import React, { Component } from 'react';
import Navbar from './Navbar'
import Payments from './Payments'

class App extends Component {
  render() {
    return(
      <div className="App">
        <Navbar />
        <Payments />
      </div>
    );
  }
}

export default App
