import './index.css'
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadCategoriesSum } from '../../actions/category'
import Circle from './Circle';
import Range from './Range';

class Charts extends Component {

  componentWillMount() {
    this.props.loadCategoriesSum(this.state)
  }

  state = {
    year: (new Date()).getFullYear(),
    month: (new Date()).getMonth()
  }

  handleChoose = (year, month) => {
    this.setState({
      year: year,
      month: month
    })
    this.props.loadCategoriesSum({year, month})
  }

  sort = (categories, type) => {
    return categories.filter(category => category.type_of_pay === type)
                     .sort((a, b) => b.sum - a.sum)
  }

  render(){
    let categories_payment = this.sort(this.props.categories, 'payment')
    let categories_income = this.sort(this.props.categories, 'income')
    return(
      <div className="Charts">
        <Range
          handleChoose={this.handleChoose}
          year={this.state.year}
          month={this.state.month}
        />
        <div className="pie-charts">
          <div className="payments-chart">
            <h3>Payments Charts:</h3>
            <Circle payments={categories_payment}/>
          </div>
          <div className="incomes-chart">
            <h3>Incoming Charts:</h3>
            <Circle payments={categories_income}/>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return state
}

const matchDispatchToProps = (dispatch) => {
  return {
    loadCategoriesSum(params) {
      dispatch(loadCategoriesSum(params));
    }
  }
}

export default connect(mapStateToProps, matchDispatchToProps)(Charts)