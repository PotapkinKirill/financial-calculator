import React, {Component} from 'react';
import {connect} from 'react-redux';


class PaymentsList extends Component {
  categoriesList = () => {
    let payments
    (this.props.type === "Payment")
      ? payments = this.props.payments
      : payments = this.props.incomes
    
    let list = payments.map(({category}) => {
      return category
    })
    return this.removeDuplicates(list)
  }


  removeDuplicates = (arr) => {
    let unique_array = []
    for (let i = 0; i < arr.length; i++) {
      if (unique_array.indexOf(arr[i]) === -1) {
        unique_array.push(arr[i])
      }
    }
    return unique_array
  }

  render() {
    console.log(this.categoriesList())
    return(
      <datalist id="PaymentsList">
        {this.categoriesList().map((category, index) =>
          <option key={index} value={category}/>
        )}
      </datalist>
    )
  }
}

const mapStateToProps = (state) => {
  return state
}

export default connect(mapStateToProps)(PaymentsList)