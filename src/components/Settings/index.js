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

  onUpdateCategory = (id, category, type) => {
    if (type === 'Payments')
      this.props.updateCategory({id, category, type: 'payment'})
    else if (type === 'Incoming')
      this.props.updateCategory({id, category, type: 'income'})
  }

  render() {
    let categories_payment = this.props.categories.filter(category => category.type_of_pay === 'payment')
    let categories_income = this.props.categories.filter(category => category.type_of_pay === 'income')
    return(
      <div className='Settings'>
        <Categories
          type='Payments'
          categories={categories_payment}
          addCategory={this.onAddCategory}
          deleteCategory={this.props.deleteCategory}
          updateCategory={this.onUpdateCategory}
        />
        <Categories
          type='Incoming'
          categories={categories_income}
          addCategory={this.onAddCategory}
          deleteCategory={this.props.deleteCategory}
          updateCategory={this.onUpdateCategory}
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