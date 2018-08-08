import React, {Component} from 'react';
import PaymentModal from '../PaymentModal';
import { connect } from 'react-redux';

class Payments extends Component {
  paymentsForCurrentMonth = () => {
    let currentMonth = (new Date()).getMonth()
    let currentYear = (new Date()).getFullYear()
    let nextMonth = currentMonth + 1
    let prevMonth = currentMonth - 1
    return this.props.payments.filter((payment) => {
      let date = new Date(payment.date)
      if (new Date(currentYear, prevMonth) < date && date < new Date(currentYear, nextMonth)) {
        return payment
      }
      return null
    });
  }

  render(){
    return(
      <PaymentModal
        type = "Payment"
        payments = {this.paymentsForCurrentMonth()} 
        addPayment = {this.props.onAddPayment}
        updatePayment = {this.props.onUpdatePayment}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return state
}

const matchDispatchToProps = (dispatch) => {
  return {
    onAddPayment: (payload) => {
      dispatch({type: 'ADD_PAYMENT', payload: payload})
    },
    onUpdatePayment: (payload) => {
      dispatch({type: 'UPDATE_PAYMENT', payload: payload})
    }
  }
}

export default connect(mapStateToProps, matchDispatchToProps)(Payments)