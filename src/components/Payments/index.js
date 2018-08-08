import React, {Component} from 'react';
import PaymentModal from '../PaymentModal';
import { connect } from 'react-redux';

class Payments extends Component {
  render(){
    return(
      <PaymentModal
        type = "Payment"
        payments = {this.props.payments} 
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