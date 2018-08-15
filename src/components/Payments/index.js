import React, {Component} from 'react';
import PaymentModal from '../PaymentModal';
import { connect } from 'react-redux';
import { loadPayments, addPayment, updatePayment } from '../../actions/payments'
import { loadPaymentsCategory } from '../../actions/category'

class Payments extends Component {

  componentWillMount() {
    this.props.loadPayments()
    this.props.loadPaymentsCategory()
  }

  render(){
    return(
      <PaymentModal
        type = "Payment"
        payments = {this.props.payments.slice().reverse()}
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
    onAddPayment(params) {
      dispatch(addPayment(params))
    },
    onUpdatePayment(params) {
      dispatch(updatePayment(params))
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