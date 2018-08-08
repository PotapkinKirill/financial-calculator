import React from 'react';

const PaymentsList = ({payments}) => {
  return(
    <datalist id="PaymentsList">
      {payments.map((payments, index) =>
        <option key={index} value={payments.category} />
      )}
    </datalist>
  )
}

export default (PaymentsList)