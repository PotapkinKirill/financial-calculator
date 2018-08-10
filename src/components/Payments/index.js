import React, {Component} from 'react';
import PaymentModal from '../PaymentModal';
import { connect } from 'react-redux';
import { loadPayments } from '../../actions/payments'
import { loadPaymentsCategory } from '../../actions/category'

class Payments extends Component {

  async componentDidMount() {
    this.props.loadPayments()
    this.props.loadPaymentsCategory()
  }

  paymentsForCurrentMonth = () => {
    let currentMonth = (new Date()).getMonth()
    let currentYear = (new Date()).getFullYear()
    let nextMonth = currentMonth + 1
    let prevMonth = currentMonth - 1
    return this.props.payments.filter((payment) => {
      let date = new Date(payment.created_at)
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
        categories = {this.props.category.payments}
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
    },
    loadPayments() {
      dispatch(loadPayments());
    },
    loadPaymentsCategory() {
      dispatch(loadPaymentsCategory());
    },
  }
}

export default connect(mapStateToProps, matchDispatchToProps)(Payments)