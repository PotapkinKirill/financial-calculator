import './index.css'
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Circle} from './Circle';
import {Range} from './Range';

class Charts extends Component {
  render(){
    return(
      <div className="Charts">
        <Range/>
        <div className="pie-charts">
          <div className="payments-chart">
            <h3>Payments Charts:</h3>
            <Circle payments={this.props.payments}/>
          </div>
          <div className="incomes-chart">
            <h3>Incoming Charts:</h3>
            <Circle payments={this.props.incomes}/>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return state
}

export default connect(mapStateToProps)(Charts)