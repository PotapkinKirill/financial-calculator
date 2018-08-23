import './index.css'
import React, { Component } from 'react';
import AddPayment from './AddPayment';
import PaymentsList from './PaymentsList';
import PaymentsPrevious from './PaymentsPrevious';

class PaymentsModal extends Component {
  state = {
    category: '',
    price: '',
    isCategoryEmpty: false,
    isPriceEmpty: false
  }

  handleCategoryChange = ({target}) => {
    let category = target.value
    target.style = ''
    this.setState({
      category,
      isCategoryEmpty: false
    })
    if (!category){
      this.setState({
        isCategoryEmpty: true
      })
    }
  }

  writePriceIfExists = () => {
    return (this.state.category && this.state.category !== ' ')
      ? this.props.payments.map((payment) => {
          return (payment.category === this.state.category)
              ? this.setState({
                  price: payment.price,
                  isPriceEmpty: false
                })
              : null
        })
      : this.setState({
          isCategoryEmpty: true,
        })
  }

  handlePriceChange = ({target}) => {
    let price = Number(target.value)
    target.style = ''
    this.setState({
      isPriceEmpty: false
    })
    if (price && price > 0) {
      this.setState({
        price
      })
    } else {
      this.setState({
        price: '',
        isPriceEmpty: true
      })
    }
  }

  ifEmptyPrice = () => {
    if (!this.state.price)
      this.setState({
        isPriceEmpty: true
      })
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
      <div className='Payments'>
        <div className='Payments__category'>
          {this.state.isCategoryEmpty && <label className='incorrect'>Please, fill category</label>}
          <input
            onChange={this.handleCategoryChange}
            onBlur={this.writePriceIfExists}
            className={'input input--category ' + (this.state.isCategoryEmpty ? 'input--incorrect' : '')}
            placeholder={this.props.type + ' Category'}
            list='PaymentsList'
            value={this.state.category}
          />
        </div>
        <PaymentsList categories={this.props.categories}/>
        <div className='Payments__price'>
          {this.state.isPriceEmpty && <label className='incorrect'>Please, fill price</label>}
          <input
            onChange={this.handlePriceChange}
            onBlur={this.ifEmptyPrice}
            className={'input input--price ' + (this.state.isPriceEmpty ? 'input--incorrect' : '')}
            placeholder={this.props.type + ' Price'}
            type='number'
            step='0.01'
            value={this.state.price}
          />
        </div>
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
