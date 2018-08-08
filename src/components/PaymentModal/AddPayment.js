import React, { Component } from 'react';
import { connect } from 'react-redux';

class AddPayment extends Component {
  updatePayment = (category, price) => {
    if (this.props.type === "Payment") {
      this.props.onUpdatePayment({
        category: category,
        price: price
      });
    } else {
      this.props.onUpdateIncome({
        category: category,
        price: price
      });
    }
  }

  addPayment = (category, price) => {
    if (this.props.type === "Payment") {
        this.props.onAddPayment({
          date: new Date(),
          category: category,
          price: price,
          sum: price
        });
    } else {
        this.props.onAddIncome({
          date: new Date(),
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
    let category = this.props.payment.category
    let price = this.props.payment.price
    let type = this.props.type
    let payments;
    if (type === "Payment") {
      payments = this.props.payments
    } else {
      payments = this.props.incomes
    }
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
    onUpdatePayment: (payload) => {
      dispatch({type: 'UPDATE_PAYMENT', payload: payload})
    },
    onAddIncome: (payload) => {
      dispatch({type: 'ADD_INCOME', payload: payload})
    },
    onUpdateIncome: (payload) => {
      dispatch({type: 'UPDATE_INCOME', payload: payload})
    }
  }
}

export default connect(mapStateToProps, matchDispatchToProps)(AddPayment)