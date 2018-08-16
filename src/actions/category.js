import {
  getPaymentsCategory,
  getIncomesCategory,
  postAddCategory,
  postUpdateCategory,
  postDeleteCategory
} from '../api/category'

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

export const addCategory = (params) => dispatch => {
  postAddCategory(params)
    .then(({category}) => {
      dispatch({ type: 'ADD_CATEGORY', payload: category})
    })
    .catch((response) => { console.log('%cERROR:','background-color: red; padding: 5px', 'loadPaymentsCategory', response)})
}

export const updateCategory = (params) => dispatch => {
  postUpdateCategory(params)
    .then(({category}) => {
      dispatch({ type: 'UPDATE_CATEGORY', payload: category})
    })
    .catch((response) => { console.log('%cERROR:','background-color: red; padding: 5px', 'loadPaymentsCategory', response)})
}

export const deleteCategory = (params) => dispatch => {
  postDeleteCategory(params)
    .then(() => {
      dispatch({ type: 'DELETE_CATEGORY', payload: params})
    })
    .catch((response) => { console.log('%cERROR:','background-color: red; padding: 5px', 'loadPaymentsCategory', response)})
}