import { getPayments, postAddPayment, postUpdatePayment } from '../api/payments'

export const loadPayments = () => dispatch => {
  getPayments()
    .then(({payments}) => {
      dispatch({ type: 'LOAD_PAYMENTS', payload: payments})
    })
    .catch((response) => { console.log('%cERROR:','background-color: red; padding: 5px', response)})
}

export const addPayment = (payment) => dispatch => {
  postAddPayment(payment)
    .then(({payment, category}) => {
      dispatch({ type: 'ADD_PAYMENT', payload: payment})
      dispatch({ type: 'UPDATE_PAYMENTS_CATEGORY', payload: category})
    })
    .catch((response) => { console.log('%cERROR:','background-color: red; padding: 5px', response)})
}

export const updatePayment = (payment) => dispatch => {
  postUpdatePayment(payment)
  .then(({payment}) => {
    dispatch({ type: 'UPDATE_PAYMENT', payload: payment})
  })
  .catch((response) => { console.log('%cERROR:','background-color: red; padding: 5px', response)})
}