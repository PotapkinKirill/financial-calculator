import './index.css'
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadPayments } from '../../actions/payments'
import { loadIncomes } from '../../actions/incomes'
import Circle from './Circle';
import Range from './Range';

class Charts extends Component {

  componentWillMount() {
    this.props.loadPayments()
    this.props.loadIncomes()
  }

  state = {
    year: (new Date()).getFullYear(),
    month: (new Date()).getMonth()
  }

  handleChoose = (year, month) => {
    this.setState({
      year: year,
      month: month
    })
    this.props.loadPayments({year, month})
    this.props.loadIncomes({year, month})
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

const matchDispatchToProps = (dispatch) => {
  return {
    loadIncomes(params) {
      dispatch(loadIncomes(params));
    },
    loadPayments(params) {
      dispatch(loadPayments(params));
    },
  }
}

export default connect(mapStateToProps, matchDispatchToProps)(Charts)