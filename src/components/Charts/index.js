import './index.css'
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Circle} from './Circle';
import {Range} from './Range';

class Charts extends Component {
  state = {
    year: (new Date()).getFullYear(),
    month: (new Date()).getMonth()
  }

  handleChoose = (year, month) => {
    this.setState({
      year: year,
      month: month
    })
  }

  paymentsForSelectedMonth = (payments) => {
      let nextMonth = this.state.month + 1
      let prevMonth = this.state.month - 1
      return payments.filter((payment) => {
        let date = new Date(payment.date)
        if (new Date(this.state.year, prevMonth) < date && date < new Date(this.state.year, nextMonth)) {
          return payment
        }
        return null
      });
    }

  render(){
    return(
      <div className="Charts">
        <Range 
          handleChoose={this.handleChoose}
          year={this.state.year}
          month={this.state.month}
        />
        <div className="pie-charts">
          <div className="payments-chart">
            <h3>Payments Charts:</h3>
            <Circle payments={this.paymentsForSelectedMonth(this.props.payments)}/>
          </div>
          <div className="incomes-chart">
            <h3>Incoming Charts:</h3>
            <Circle payments={this.paymentsForSelectedMonth(this.props.incomes)}/>
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