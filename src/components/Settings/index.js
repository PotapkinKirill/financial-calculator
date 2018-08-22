import './index.css'
import React, {Component} from 'react';
import { connect } from 'react-redux';
import {
  loadCategories,
  addCategory,
  updateCategory,
  deleteCategory
} from '../../actions/category'
import Categories from './Categories'

class Settings extends Component {

  componentWillMount() {
    this.props.loadCategories()
  }

  onAddCategory = (category, type) => {
    if (type === 'Payments')
      this.props.addCategory({category, type: 'payment'})
    else if (type === 'Incoming')
      this.props.addCategory({category, type: 'income'})
  }

  sort = (categories, type) => {
    return categories.filter(category => category.type_of_pay === type)
      .sort((a, b) => new Date(a.created_at) - new Date(b.created_at))
  }

  render() {
    let categories_payment = this.sort(this.props.categories, 'payment')
    let categories_income = this.sort(this.props.categories, 'income')
    return(
      <div className='Settings'>
        <Categories
          type='Payments'
          categories={categories_payment}
          addCategory={this.onAddCategory}
          deleteCategory={this.props.deleteCategory}
          updateCategory={this.props.updateCategory}
        />
        <Categories
          type='Incoming'
          categories={categories_income}
          addCategory={this.onAddCategory}
          deleteCategory={this.props.deleteCategory}
          updateCategory={this.props.updateCategory}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return state
}

const matchDispatchToProps = (dispatch) => {
  return {
    loadCategories() {
      dispatch(loadCategories());
    },
    addCategory(params) {
      dispatch(addCategory(params));
    },
    updateCategory(params) {
      dispatch(updateCategory(params));
    },
    deleteCategory(params) {
      dispatch(deleteCategory(params));
    },
  }
}

export default connect(mapStateToProps, matchDispatchToProps)(Settings)