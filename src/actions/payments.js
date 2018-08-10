import { getPayments } from '../api/payments'

export const loadPayments = () => dispatch => {
  getPayments()
    .then(({payments}) => {
      dispatch({ type: 'LOAD_PAYMENTS', payload: payments})
    })
    .catch((response) => { console.log('%cERROR:','background-color: red; padding: 5px', response)})
}