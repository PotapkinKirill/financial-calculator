import { getIncomes, postAddIncome, postUpdateIncome } from '../api/incomes'

export const loadIncomes = () => dispatch => {
  getIncomes()
    .then(({incomes}) => {
      dispatch({ type: 'LOAD_INCOMES', payload: incomes})
    })
    .catch((response) => { console.log('%cERROR:','background-color: red; padding: 5px', response)})
}

export const addIncome = (income) => dispatch => {
  postAddIncome(income)
    .then(({income, category}) => {
      dispatch({ type: 'ADD_INCOME', payload: income})
      dispatch({ type: 'UPDATE_INCOMES_CATEGORY', payload: category})
    })
    .catch((response) => { console.log('%cERROR:','background-color: red; padding: 5px', response)})
}

export const updateIncome = (income) => dispatch => {
  postUpdateIncome(income)
  .then(({income}) => {
    dispatch({ type: 'UPDATE_INCOME', payload: income})
  })
  .catch((response) => { console.log('%cERROR:','background-color: red; padding: 5px', response)})
}