import React, {Component} from 'react';
import PaymentModal from '../PaymentModal';
import { connect } from 'react-redux';
import { loadIncomes, addIncome, updateIncome } from '../../actions/incomes'
import { loadIncomesCategory } from '../../actions/category'

class Income extends Component {

  componentWillMount() {
    this.props.loadIncomes()
    this.props.loadIncomesCategory()
  }

  render(){
    return(
      <PaymentModal
        type = "Income"
        payments = {this.props.incomes}
        categories = {this.props.category.incomes}
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
    onAddIncome(params) {
      dispatch(addIncome(params))
    },
    onUpdateIncome(params) {
      dispatch(updateIncome(params))
    },
    loadIncomes() {
      dispatch(loadIncomes());
    },
    loadIncomesCategory() {
      dispatch(loadIncomesCategory());
    },
  }
}

export default connect(mapStateToProps, matchDispatchToProps)(Income)

