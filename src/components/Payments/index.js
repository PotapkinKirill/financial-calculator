import './index.css'
import React, { Component } from 'react';
import { connect } from 'react-redux'
import PaymentsList from './PaymentsList'
import PaymentsPrevious from './PaymentsPrevious'
//import { addPayment } from '../../actions/payments'

class Payments extends Component {
  state = {
    category: '',
    price: ''
  }

  categoryExist = ({category}) => {
    return category === this.state.category
  }

  addPayment = () => {
    if (this.state.category && this.state.price) {
      if (this.props.payments.some(this.categoryExist)) {
        this.props.onUpdateSum({
          category: this.state.category,
          price: this.state.price,
        });
      }
      else {
        this.props.onAddPayment({
          category: this.state.category,
          price: this.state.price,
          sum: this.state.price
        });
      }
      this.setState({
          category: '',
          price: ''
        });
    }
    else {
      alert('Поле пустое');
    }
  }

  handleCategoryChange = (e) => {
    const value = e.target.value
    this.setState({
      category: value
    });
    this.props.payments.map((payment) => {
      if (payment.category === value){
        this.setState({
          price: payment.price
        });
      }
      return null
    });
  }

  handlePriceChange = (e) => {
    const value = Number(e.target.value)
    if (value >= 0) {
      this.setState({
        price: value
      });
    }
    else {
      e.target.value="";
      alert('Цена меньше 0');
    }
  }

  render(){
    return(
      <div onSubmit={this.handleSubmit} className="payments">
        <input 
          onChange={this.handleCategoryChange}
          className="payments__category"
          placeholder="Payment Category"
          list="PaymentsList"
          value={this.state.category}
        />
        <PaymentsList />
        <input 
          onChange={this.handlePriceChange}
          className="payments__price"
          placeholder="Payment Price"
          type="number"
          step="0.01"
          value={this.state.price}
        />
        <button onClick={this.addPayment} className="payments__save">
          Add Payment
        </button>
        <PaymentsPrevious></PaymentsPrevious>
      </div>
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
    onUpdateSum: (payload) => {
      dispatch({type: 'UPDATE_SUM', payload: payload})
    }
  }
}

export default connect(mapStateToProps, matchDispatchToProps)(Payments)