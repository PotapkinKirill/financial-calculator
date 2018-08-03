import React from 'react';

export const PaymentsList = ({payments}) => {
  return(
    <datalist id="PaymentsList">
      {payments.map((payments, index) =>
        <option key={index} value={payments.category} />
      )}
    </datalist>
  )
}