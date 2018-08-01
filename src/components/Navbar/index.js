import './index.css'
import React, { Component } from 'react';

class Navbar extends Component {
  render() {
    return(
      <ul className="Navbar">
        <input type="radio" id="Payments" name="navigation" value="Payments" />
        <label htmlFor="Payments">Payments</label>
        <input type="radio" id="Income" name="navigation" value="Income"/>
        <label htmlFor="Income">Income</label>
        <input type="radio" id="Charts" name="navigation" value="Charts"/>
        <label htmlFor="Charts">Charts</label>
        <input type="radio" id="Settings" name="navigation" value="Charts"/>
        <label htmlFor="Settings">Settings</label>
      </ul>
    );
  }
}

export default (Navbar)