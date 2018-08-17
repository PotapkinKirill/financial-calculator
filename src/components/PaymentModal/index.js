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
    target.style = ''
    if (category) {
      this.setState({
        category
      })
    } else {
      this.setState({
        category: ''
      })
      target.style='border-color: red'
    }
  }

  writePriceIfExists = () => {
    return this.state.category
      ? this.props.payments.map((payment) => {
          return (payment.category === this.state.category)
            ? this.setState({
                price: payment.price
              })
            : null
        })
      : this.setState({
          price: ''
        })
  }

  handlePriceChange = ({target}) => {
    let price = Number(target.value)
    target.style = ''
    if (price > 0) {
      this.setState({
        price
      })
    } else {
      this.setState({
        price: ''
      })
      target.style='border-color: red'
    }
  }

  setFocus = ({target}) => {
    target.style = ''
  }

  setClear = () => {
    this.setState({
      category: '',
      price: ''
    })
  }

  sort_by_date = (a, b) => {
    return new Date(b.created_at) - new Date(a.created_at)
  }

  render(){
    let payments  = this.props.payments.slice().sort((a, b) => this.sort_by_date(a,b))
    return(
      <div className="Payments">
        <input
          onChange={this.handleCategoryChange}
          onBlur={this.writePriceIfExists}
          className = 'Payments__input Payments__category'
          placeholder={this.props.type + ' Category'}
          list='PaymentsList'
          value={this.state.category}
        />
        <PaymentsList categories={this.props.categories}/>
        <input
          onChange={this.handlePriceChange}
          className='Payments__input Payments__price'
          placeholder={this.props.type + ' Price'}
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
