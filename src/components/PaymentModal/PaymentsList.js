import React from 'react';

const PaymentsList = ({categories}) => {
  return(
    <datalist id="PaymentsList">
      {categories.map((category, index) =>
        <option key={index} value={category.name}/>
      )}
    </datalist>
  )
}

export default (PaymentsList)