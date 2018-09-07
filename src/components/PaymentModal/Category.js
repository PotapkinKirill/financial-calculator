import './index.css'
import React, { Component } from 'react';
import List from './CategoryList'

class Category extends Component {
  state = {
    isEmptyCategory: false,
    isShowList: false
  }

  onChangeCategory = ({target}) => {
    this.onToggleShowList()
    let category = target.value
    this.props.setCategory(category)
    this.writePriceIfExists(category)
    this.setState({isEmptyCategory: false, isShowList: true})
  }

  writePriceIfExists = category => {
    let { payments } = this.props
    if (category) {
      let existingPayment = payments.find(payment => {
        return payment.category === category
      })
      return (existingPayment)
        ? this.props.setPrice(existingPayment.price)
        : this.props.setPrice('')
    }
    else
      this.setState({isEmptyCategory: true})
  }

  setCategory = (category) => {
    this.props.setCategory(category)
    this.writePriceIfExists(category)
    this.setState({
      isEmptyCategory: false,
      isShowList: false
    })
  }

  onToggleShowList = () => {
    this.setState({
      isShowList: !this.state.isShowList
    })
  }

  findCategoies = (categories) => {
    return categories.map(category => {
      if (category.name.match(this.props.category))
        return category
      else 
        return undefined
    }).filter(category => category !== undefined)
  }

  render() {
    let categories = this.findCategoies(this.props.categories)
    let { isEmptyCategory } = this.state
    return(
      <div className='Payments__category'>
        {isEmptyCategory && <label className='incorrect'>Please, fill category</label>}
        <div className={'input input--wrapper ' + (isEmptyCategory ? 'input--incorrect' : '')}>
          <input
            onChange={this.onChangeCategory}
            className='input input--category'
            placeholder={this.props.type + ' Category'}
            value={this.props.category}
          />
          <span className='arrow' onClick={this.onToggleShowList}>⯆</span>
        </div>
        {
          this.state.isShowList &&
          <List
            categories={categories}
            setCategory={this.setCategory}
          />
        }
      </div>
    )
  }
}

export default (Category)
