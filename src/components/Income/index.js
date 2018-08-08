import React, {Component} from 'react';
import PaymentModal from '../PaymentModal';
import { connect } from 'react-redux';

class Income extends Component {
  render(){
    return(
      <PaymentModal
        type = "Income"
        payments = {this.props.incomes}
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

