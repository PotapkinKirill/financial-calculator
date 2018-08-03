import React, { Component } from 'react';
import { connect } from 'react-redux';

class AddPayment extends Component {
  updatePayment = (category, price) => {
    if (this.props.type === "Payment") {
      this.props.onUpdatePaymentSum({
        category: category,
        price: price
      });
    } else {
      this.props.onUpdateIncomeSum({
        category: category,
        price: price
      });
    }
  }

  addPayment = (category, price) => {
    if (this.props.type === "Payment") {
        this.props.onAddPayment({
          category: category,
          price: price,
          sum: price
        });
    } else {
        this.props.onAddIncome({
          category: category,
          price: price,
          sum: price
        });
    }
  }

  categoryExist = ({category}) => {
    return category === this.props.payment.category
  }

  addPayments = () => {
    var category = this.props.payment.category
    var price = this.props.payment.price
    var type = this.props.type
    if (type === "Income") {
      var payments = this.props.incomes
    } else {
      var payments = this.props.payments
    }

    console.log(2)
    if (category && price) {
      if (payments.some(this.categoryExist)) {
        this.updatePayment(category, price);
      } else {
        this.addPayment(category, price);
      }
      this.props.setClear();
    } else {
      alert('Поле пустое');
    }
  }

  render(){
    return(
      <button onClick={this.addPayments} className="Payments__save">
        Add Payment
      </button>
    )
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
    onUpdatePaymentSum: (payload) => {
      dispatch({type: 'UPDATE_PAYMENT_SUM', payload: payload})
    },
    onAddIncome: (payload) => {
      dispatch({type: 'ADD_INCOME', payload: payload})
    },
    onUpdateIncomeSum: (payload) => {
      dispatch({type: 'UPDATE_INCOME_SUM', payload: payload})
    }
  }
}

export default connect(mapStateToProps, matchDispatchToProps)(AddPayment)