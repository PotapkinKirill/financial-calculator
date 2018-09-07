import consoleError from '../utils/consoleError'
import { getLoadPayments, postAddPayment, putUpdatePayment } from '../api/payments'

export const loadPayments = () => dispatch => {
  getLoadPayments()
    .then(({data}) => {
      dispatch({ type: 'LOAD_PAYMENTS', payload: data.payments})
    })
    .catch(error => consoleError(error))
}

export const addPayment = (payment) => dispatch => {
  postAddPayment(payment)
    .then(({data}) => {
      dispatch({ type: 'ADD_PAYMENT', payload: data.payment})
      dispatch({ type: 'ADD_CATEGORY', payload: data.category})
    })
    .catch(error => consoleError(error))
}

export const updatePayment = (payment) => dispatch => {
  putUpdatePayment(payment)
  .then(({data}) => {
    dispatch({ type: 'UPDATE_PAYMENT', payload: data.payment})
  })
  .catch(error => consoleError(error))
}