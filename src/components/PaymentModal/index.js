import './index.css'
import React, { Component } from 'react';
import { connect } from 'react-redux';
import AddPayment from './AddPayment';
import {PaymentsList} from './PaymentsList';
import {PaymentsPrevious} from './PaymentsPrevious';

class Payments extends Component {
  state = {
    category: '',
    price: ''
  }

  handleCategoryChange = ({target}) => {
    const value = target.value
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

  handlePriceChange = ({target}) => {
    const value = Number(target.value)
    if (value > 0) {
      this.setState({
        price: value
      });
    }
    else {
      target.style='';
      alert('Цена ≤ 0');
    }
  }

  setClear = () =>{
    this.setState({
      category: '',
      price: ''
    });
  }

  render(){
    var type = this.props.type
    if (type === "Income") {
      var payments = this.props.incomes
    }
    else {
      var payments = this.props.payments
    }
    return(
      <div className={type}>
        <input
          onChange={this.handleCategoryChange}
          className='Payments__category'
          placeholder={type + ' Category'}
          list='PaymentsList'
          value={this.state.category}
        />
        <PaymentsList payments={payments}/>
        <input
          onChange={this.handlePriceChange}
          className='Payments__price'
          placeholder={type + ' Price'}
          type='number'
          step='0.01'
          value={this.state.price}
        />
        <AddPayment type={type} setClear={this.setClear} payments={payments} payment={this.state}/>
        <PaymentsPrevious type={type} payments={payments}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return state
}

export default connect(mapStateToProps)(Payments)