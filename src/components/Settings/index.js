import './index.css'
import React, {Component} from 'react';
import { connect } from 'react-redux';
import {
  loadPaymentsCategory,
  loadIncomesCategory,
  addCategory,
  updateCategory,
  deleteCategory
} from '../../actions/category'
import Categories from './Categories'

class Settings extends Component {

  componentWillMount() {
    this.props.loadPaymentsCategory()
    this.props.loadIncomesCategory()
  }

  render(){
    return(
      <div className='Settings'>
      <Categories
        type='Payments'
        categories={this.props.category.payments}
        deleteCategory={this.props.deleteCategory}
      />
      <Categories
        type='Incoming'
        categories={this.props.category.incomes}
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
    loadPaymentsCategory() {
      dispatch(loadPaymentsCategory());
    },
    loadIncomesCategory() {
      dispatch(loadIncomesCategory());
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