import './index.css'
import React, { Component } from 'react';

class Navbar extends Component {
  state = {
    tabs: [
      "Payments",
      "Income",
      "Charts",
      "Settings"
    ]
  }
  

  
  render() {
    return(
      <ul className="Navbar">
      {this.state.tabs.map((tab, index) => 
        <span key={index}>
          <input
            type="radio"
            id={tab}
            name="navigation"
            value={tab}
            onClick={this.handleClick}
          />
          <label htmlFor={tab}>{tab}</label>
        </span>
      )}
      </ul>
    );
  }
}

export default (Navbar)