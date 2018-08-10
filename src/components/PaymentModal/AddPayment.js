import React from 'react';

const AddPayment = (props) => {
  const updatePayment = (category, price) => {
    props.updatePayment({
      category: category,
      price: price
    });
  }

  const addPayment = (category, price) => {
    props.addPayment({
      date: new Date(),
      category: category,
      price: price,
      sum: price
    });
  }

  const addPayments = () => {
    let category = props.payment.category
    let price = props.payment.price
    if (category && price) {
      if (props.payments.includes(category)) {
        updatePayment(category, price);
      } else {
        addPayment(category, price);
      }
      props.setClear();
    } else {
      alert('Поле пустое');
    }
  }

  const addTest = () => {
    return fetch('http://localhost:3001/api/v1/payment/add', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      mode: 'cors'
    })
      .then(response => response.json())
      .then(data => console.log(data))
  }

  return(
    <div>
      <button onClick={addPayments} className="Payments__save">
        Add Payment
      </button>
      <button onClick={addTest}>TEST</button>
    </div>
  )
}

export default (AddPayment)
