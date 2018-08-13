import React, {Component} from 'react';
import {connect} from 'react-redux';


class PaymentsList extends Component {
  categoriesList = () => {
    return (this.props.type === "Payment")
      ? this.props.category.payments
      : this.props.category.incomes
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