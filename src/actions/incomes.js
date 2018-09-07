import consoleError from '../utils/consoleError'
import { getLoadIncomes, postAddIncome, putUpdateIncome } from '../api/incomes'

export const loadIncomes = (params) => dispatch => {
  getLoadIncomes(params)
    .then(({data}) => {
      dispatch({ type: 'LOAD_INCOMES', payload: data.incomes})
    })
    .catch(error => consoleError(error))
}

export const addIncome = (income) => dispatch => {
  postAddIncome(income)
    .then(({data}) => {
      dispatch({ type: 'ADD_INCOME', payload: data.income})
      dispatch({ type: 'ADD_CATEGORY', payload: data.category})
    })
    .catch(error => consoleError(error))
}

export const updateIncome = (income) => dispatch => {
  putUpdateIncome(income)
  .then(({data}) => {
    dispatch({ type: 'UPDATE_INCOME', payload: data.income})
  })
  .catch(error => consoleError(error))
}