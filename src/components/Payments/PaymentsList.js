import React, { Component } from 'react';
import { connect } from 'react-redux'

class PaymentsList extends Component {
  render() {
    return(
      <datalist id="PaymentsList">
        {this.props.payments.map((item, index) =>
          <option key={index} value={item.category} />
        )}
      </datalist>
    )
  }
}

const mapStateToProps = (state) => {
  return state
}

export default connect(mapStateToProps)(PaymentsList)