import React from 'react';

const PaymentsPrevious = ({payments, categories}) => {
  if (payments.length === 0) {
    return(null)
  }
  else{
    let sum = [];
    categories.map((category) => {
      payments.map((payment) => {
        if (category.id === payment.category_id) {
          if (sum[category.id]){
            sum[category.id] += payment.price
          } else {
            sum[category.id] = payment.price
          }
        }
        return null
      });
      return null
    });


    categories.map((category) => {
      console.log(payments.includes(category.id))
    });


    return(
      <div className="Payments__views">
        <h3>Previous payments:</h3>
        <table>
          <tbody>
            {
              categories.map((category) => 
                <tr key={category.id}>
                  <td className="Payments__views-input-radio"><input type="radio" defaultChecked /></td>
                  <td className="Payments__views-category">{category.name}:</td>
                  <td className="Payments__views-price">${Math.round(sum[category.id] * 100) / 100}</td>
                </tr>
              )
            }
          </tbody>
        </table>
      </div>
    )
  }
}

export default (PaymentsPrevious)