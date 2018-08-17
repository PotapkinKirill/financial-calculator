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

  return(
    <button
      onClick={addPayments}
      className="Payments__button Payments__save"
      disabled={!(props.payment.category && props.payment.price)}
      >Add Payment
    </button>
  )
}

export default (AddPayment)
