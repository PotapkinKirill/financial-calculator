import { getPaymentsCategory, getIncomesCategory } from '../api/category'

export const loadPaymentsCategory = () => dispatch => {
  getPaymentsCategory()
    .then(({categories}) => {
      dispatch({ type: 'LOAD_PAYMENTS_CATEGORY', payload: categories})
    })
    .catch((response) => { console.log('%cERROR:','background-color: red; padding: 5px', 'loadPaymentsCategory', response)})
}

export const loadIncomesCategory = () => dispatch => {
  getIncomesCategory()
    .then(({categories}) => {
      dispatch({ type: 'LOAD_INCOMES_CATEGORY', payload: categories})
    })
    .catch((response) => { console.log('%cERROR:','background-color: red; padding: 5px', 'loadPaymentsCategory', response)})
}