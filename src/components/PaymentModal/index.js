import './index.css'
import React, { Component } from 'react';
import Category from './Category'
import CategorysList from './CategorysList';
import Price from './Price'
import AddPayment from './AddPayment';
import Previous from './Previous';


class PaymentsModal extends Component {
  state = {
    category: '',
    price: '',
    isEmptyPrice: false
  }

  setPrice = (price) => {
    this.setState({
      price,
      isEmptyPrice: false
    })
  }

  setCategory = (category) => {
    this.setState({category})
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
    let payments = this.props.payments.slice().sort((a, b) => this.sort_by_date(a,b))
    return(
      <div className='Payments'>
        <Category
          type={this.props.type}
          category={this.state.category}
          payments={this.props.payments}
          setCategory={this.setCategory}
          setPrice={this.setPrice}
        />
        <CategorysList categories={this.props.categories}/>
        <Price
          type={this.props.type}
          price={this.state.price}
          isEmptyPrice={this.state.isEmptyPrice}
          setPrice={this.setPrice}
        />
        <AddPayment
          setClear={this.setClear}
          payments={payments}
          payment={this.state}
          addPayment={this.props.addPayment}
          updatePayment={this.props.updatePayment}
        />
        <Previous payments={payments} categories={this.props.categories}/>
      </div>
    );
  }
}

export default (PaymentsModal)
