import React, { Component } from 'react';
import { connect } from 'react-redux'

class PaymentsPrevious extends Component {
  render() {
    var payments = this.props.payments.slice().reverse();
    return(
      <div className="payments__views">
        <h3>Previous payments:</h3>
        <table>
          <tbody>
          { payments.map((payment, index) =>
            <tr key={index}>
              <td className="payments__views-input-radio"><input type="radio" defaultChecked /></td>
              <td className="payments__views-category">{payment.category}:</td>
              <td className="payments__views-price">${payment.sum}</td>
            </tr>
          )}
          </tbody>
        </table>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return state
}

export default connect(mapStateToProps)(PaymentsPrevious)