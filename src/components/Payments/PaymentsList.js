import React from 'react';

export const PaymentsList = (props) => {
  if (props.children.category) {
  console.log(props.children.category)
  return(
    <datalist id="PaymentsList">
      {props.children.category.map((item) =>
        <option value={item} />
      )}
    </datalist>
  )}
  else 
    return null
}