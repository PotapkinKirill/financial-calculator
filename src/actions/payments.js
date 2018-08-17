import { postLoadPayments, postAddPayment, postUpdatePayment } from '../api/payments'

export const loadPayments = (params) => dispatch => {
  postLoadPayments(params)
    .then(({payments}) => {
      dispatch({ type: 'LOAD_PAYMENTS', payload: payments})
    })
    .catch((response) => { console.log('%cERROR:','background-color: red; padding: 5px', 'loadPayments', response)})
}

export const addPayment = (payment) => dispatch => {
  postAddPayment(payment)
    .then(({payment, category}) => {
      dispatch({ type: 'ADD_PAYMENT', payload: payment})
      dispatch({ type: 'ADD_CATEGORY', payload: category})
    })
    .catch((response) => { console.log('%cERROR:','background-color: red; padding: 5px', 'addPayment', response)})
}

export const updatePayment = (payment) => dispatch => {
  postUpdatePayment(payment)
  .then(({payment}) => {
    dispatch({ type: 'UPDATE_PAYMENT', payload: payment})
  })
  .catch((response) => { console.log('%cERROR:','background-color: red; padding: 5px', 'updatePayment', response)})
}