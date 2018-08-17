import { postLoadIncomes, postAddIncome, postUpdateIncome } from '../api/incomes'

export const loadIncomes = (params) => dispatch => {
  postLoadIncomes(params)
    .then(({incomes}) => {
      dispatch({ type: 'LOAD_INCOMES', payload: incomes})
    })
    .catch((response) => { console.log('%cERROR:','background-color: red; padding: 5px', 'loadIncomes', response)})
}

export const addIncome = (income) => dispatch => {
  postAddIncome(income)
    .then(({income, category}) => {
      dispatch({ type: 'ADD_INCOME', payload: income})
      dispatch({ type: 'ADD_CATEGORY', payload: category})
    })
    .catch((response) => { console.log('%cERROR:','background-color: red; padding: 5px', 'addIncome', response)})
}

export const updateIncome = (income) => dispatch => {
  postUpdateIncome(income)
  .then(({income}) => {
    dispatch({ type: 'UPDATE_INCOME', payload: income})
  })
  .catch((response) => { console.log('%cERROR:','background-color: red; padding: 5px', 'updateIncome', response)})
}