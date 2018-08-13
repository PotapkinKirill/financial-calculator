import './index.css'
import React, { Component } from 'react';
import AddPayment from './AddPayment';
import PaymentsList from './PaymentsList';
import PaymentsPrevious from './PaymentsPrevious';

class PaymentsModal extends Component {
  state = {
    category: '',
    price: ''
  }

  handleCategoryChange = ({target}) => {
    let category = target.value
    this.setState({
      category: category
    });
  }

  writePriceIfExists = () => {
    this.props.payments.map((payment) => {
      if (payment.category === this.state.category) {
        this.setState({
          price: payment.price
        });
      }
      return null
    });
  }

  handlePriceChange = ({target}) => {
    let price = Number(target.value)
    if (price > 0) {
      this.setState({
        price: price
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
    let type = this.props.type;
    let payments = this.props.payments
    return(
      <div className="Payments">
        <input
          onChange={this.handleCategoryChange}
          onBlur={this.writePriceIfExists}
          className = 'Payments__input Payments__category'
          placeholder={type + ' Category'}
          list='PaymentsList'
          value={this.state.category}
        />
        <PaymentsList type={type}/>
        <input
          onChange={this.handlePriceChange}
          className='Payments__input Payments__price'
          placeholder={type + ' Price'}
          type='number'
          step='0.01'
          value={this.state.price}
        />
        <AddPayment
          setClear={this.setClear} 
          payments={payments} 
          payment={this.state}
          addPayment={this.props.addPayment}
          updatePayment={this.props.updatePayment}
        />
        <PaymentsPrevious payments={payments} categories={this.props.categories}/>
      </div>
    );
  }
}

export default (PaymentsModal)
