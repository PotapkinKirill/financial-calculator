import React, {Component} from 'react';
import PaymentModal from '../PaymentModal';
import { connect } from 'react-redux';

class Income extends Component {
  paymentsForCurrentMonth = () => {
    let currentMonth = (new Date()).getMonth()
    let currentYear = (new Date()).getFullYear()
    let nextMonth = currentMonth + 1
    let prevMonth = currentMonth - 1
    return this.props.incomes.filter((payment) => {
      let date = new Date(payment.date)
      if (new Date(currentYear, prevMonth) < date && date < new Date(currentYear, nextMonth)){
        return payment
      }
      return null
    });
  }

  render(){
    return(
      <PaymentModal
        type = "Income"
        payments = {this.paymentsForCurrentMonth()}
        addPayment = {this.props.onAddIncome}
        updatePayment = {this.props.onUpdateIncome}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return state
}

const matchDispatchToProps = (dispatch) => {
  return {
    onAddIncome: (payload) => {
      dispatch({type: 'ADD_INCOME', payload: payload})
    },
    onUpdateIncome: (payload) => {
      dispatch({type: 'UPDATE_INCOME', payload: payload})
    }
  }
}

export default connect(mapStateToProps, matchDispatchToProps)(Income)

