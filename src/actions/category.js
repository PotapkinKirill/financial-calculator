import { getPaymentsCategory } from '../api/category'

export const loadPaymentsCategory = () => dispatch => {
  getPaymentsCategory()
    .then(({categories}) => {
      dispatch({ type: 'LOAD_PAYMENTS_CATEGORY', payload: categories})
    })
    .catch((response) => { console.log('%cERROR:','background-color: red; padding: 5px', response)})
}