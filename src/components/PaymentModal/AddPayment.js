import React from 'react';

const AddPayment = (props) => {
  const getIdIfCategoryExists = ({category}) => {
    if (category === props.payment.category)
    return props.payment.category.id
  }

  const addPayments = () => {
    let category = props.payment.category
    let price = props.payment.price
    if (category && price) {
      let id = props.payments.some(getIdIfCategoryExists)
      if (id) {
        props.updatePayment({id, price});
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
      className="button button--add"
      disabled={!(props.payment.category && props.payment.price)}
      >Add Payment
    </button>
  )
}

export default (AddPayment)
