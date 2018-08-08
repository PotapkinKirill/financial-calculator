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

  const categoryExist = ({category}) => {
    return category === props.payment.category
  }

  const addPayments = () => {
    let category = props.payment.category
    let price = props.payment.price
    if (category && price) {
      if (props.payments.some(categoryExist)) {
        updatePayment(category, price);
      } else {
        addPayment(category, price);
      }
      props.setClear();
    } else {
      alert('Поле пустое');
    }
  }

  return(
    <button onClick={addPayments} className="Payments__save">
      Add Payment
    </button>
  )
}

export default (AddPayment)
