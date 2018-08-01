import './index.css'
import React, { Component } from 'react';
import { connect } from 'react-redux'
import {PaymentsList} from './PaymentsList'
import PaymentsPrevious from './PaymentsPrevious'
//import { addPayment } from '../../actions/payments'

class Payments extends Component {
  state = {
    category: '',
    price: ''
  }

  addPayment = () => {
    if (this.state.category && this.state.price) {
      this.props.onAddPayment({
        category: this.state.category, 
        price:  this.state.price
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
        { /*<Select
          className="payments_name"
          options={options}
        />*/
        }
        <input onChange={this.handleCategoryChange} className="payments__category" placeholder="Payment Category"/>
        <input onBlur={this.handlePriceChange} className="payments__price" placeholder="Payment Price"/>
        <button onClick={this.addPayment} className="payments__save">Add Payment</button>
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
    }
  }
}

export default connect(mapStateToProps, matchDispatchToProps)(Payments)