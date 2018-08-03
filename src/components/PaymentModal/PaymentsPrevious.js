import React from 'react';

export const PaymentsPrevious = ({payments}) => {
  if (payments.length === 0) {
    return(null)
  }
  else{
    return(
      <div className="Payments__views">
        <h3>Previous payments:</h3>
        <table>
          <tbody>
          { payments.map((payment, index) =>
            <tr key={index}>
              <td className="Payments__views-input-radio"><input type="radio" defaultChecked /></td>
              <td className="Payments__views-category">{payment.category}:</td>
              <td className="Payments__views-price">${Math.round(payment.sum * 100) / 100}</td>
            </tr>
          )}
          </tbody>
        </table>
      </div>
    )
  }
}