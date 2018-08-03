import React from 'react';

export const PriceInput = ({price, handlePriceChange}) =>  {
  return(
    <input
      onChange={handlePriceChange}
      className='Payments__price'
      placeholder='Payment Price'
      type='number'
      step='0.01'
      value={price}
    />
  )
}