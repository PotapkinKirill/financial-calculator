import React from 'react';

const PaymentsPrevious = ({payments}) => {
  return (payments.length === 0)
    ? null
    : <div className="Payments__views">
        <h3>Previous payments:</h3>
        <table>
          <tbody>
            {payments.map((payment) => {
              return (
                <tr key={payment.id}>
                    <td className="Payments__views-input-radio"><input type="radio" defaultChecked /></td>
                    <td className="Payments__views-category">{payment.category}:</td>
                    <td className="Payments__views-price">${Math.round(payment.price * 100) / 100}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
}

export default (PaymentsPrevious)