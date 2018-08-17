import React, {Component} from 'react';
import PaymentModal from '../PaymentModal';
import { connect } from 'react-redux';
import { loadPayments, addPayment, updatePayment } from '../../actions/payments'
import { loadCategories } from '../../actions/category'

class Payments extends Component {

  componentWillMount() {
    this.props.loadPayments()
    this.props.loadCategories()
  }

  render(){
    return(
      <PaymentModal
        type = "Payment"
        payments = {this.props.payments}
        categories = {this.props.categories.filter(category => category.type_of_pay === 'payment')}
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
    loadCategories() {
      dispatch(loadCategories());
    },
  }
}

export default connect(mapStateToProps, matchDispatchToProps)(Payments)