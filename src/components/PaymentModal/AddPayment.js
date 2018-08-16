import React from 'react';

const AddPayment = (props) => {
  const categoryExists = ({category}) => {
    return category === props.payment.category
  }

  const addPayments = () => {
    let category = props.payment.category
    let price = props.payment.price
    if (category && price) {
      if (props.payments.some(categoryExists)) {
        props.updatePayment({category, price});
      } else {
        props.addPayment({category, price});
      }
      props.setClear();
    } else {
      alert('Поле пустое');
    }
  }

  /*const addTest = () => {
    return fetch('http://localhost:3001/api/v1/payment/add', {
      method: 'POST',
      headers: {
        'Access-Control-Allow-Origin': 'http://localhost:3000',
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({category: 'MilkTEST2', price: 12}),
      mode: 'cors'
    }).then(response => response.json())
  }*/

  return(
    <button onClick={addPayments} className="Payments__button Payments__save">
      Add Payment
    </button>
  )
}

export default (AddPayment)
