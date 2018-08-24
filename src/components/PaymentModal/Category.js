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
    this.setState({isEmptyCategory: false, isShowList: true})
    if (!category){
      this.setState({isEmptyCategory: true})
    }
  }

  writePriceIfExists = () => {
    let { category, payments } = this.props
    return (category)
      ? payments.map((payment) => {
        return (payment.category === category)
          ? this.props.setPrice(payment.price)
          : null
      })
      : this.setState({isEmptyCategory: true})
  }

  setCategory = (category) => {
    this.setState({
      category,
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
            onBlur={this.writePriceIfExists}
            onFocus={this.onToggleShowList}
            className='input input--category'
            placeholder={this.props.type + ' Category'}
            defaultValue={this.state.category}
          />
          <span className='arrow' onClick={this.onToggleShowList}>&#11167;</span>
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
