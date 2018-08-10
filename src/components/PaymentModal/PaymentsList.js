import React, {Component} from 'react';
import {connect} from 'react-redux';


class PaymentsList extends Component {
  categoriesList = () => {
    let categories
    (this.props.type === "Payment")
      ? categories = this.props.category.payments
      : categories = this.props.category.incomes
    return categories
  }

  render() {
    return(
      <datalist id="PaymentsList">
        {this.categoriesList().map((category, index) =>
          <option key={index} value={category.name}/>
        )}
      </datalist>
    )
  }
}

const mapStateToProps = (state) => {
  return state
}

export default connect(mapStateToProps)(PaymentsList)