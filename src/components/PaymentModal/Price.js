import './index.css'
import React, { Component } from 'react';

class Price extends Component {
  state = {
    isEmptyPrice: false
  }

  onChangePrice = ({target}) => {
    let price = Number(target.value)
    this.setState({
      isEmptyPrice: false,
      isLessPrice: false
    })
    if (!price)
      this.ifEmptyPrice()
    if (price > 0)
      this.props.setPrice(price)
    else {
      this.props.setPrice('')
      this.setState({isLessPrice: true})
    }
  }

  ifEmptyPrice = () => {
    if (!this.props.price)
      this.setState({
        isEmptyPrice: true,
        isLessPrice: false
      })
  }

  render(){
    let isEmptyPrice = this.props.isEmptyPrice || this.state.isEmptyPrice
    let { isLessPrice } = this.state
    let { price } = this.props
    return(
      <div className='Payments__price'>
        {isEmptyPrice && <label className='incorrect'>Please, fill price</label>}
        {isLessPrice && <label className='incorrect'>{'The price can\'t be less than 0.01'}</label>}
        <input
          onChange={this.onChangePrice}
          className={'input input--price ' + (isEmptyPrice || isLessPrice ? 'input--incorrect' : '')}
          placeholder={this.props.type + ' Price'}
          type='number'
          step='0.01'
          value={price}
        />
      </div>
    )
  }
}

export default (Price)