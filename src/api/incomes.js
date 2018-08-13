import api from './api'

export const getIncomes = () => {
  return api('income/all', 'GET')
}

export const postAddIncome = (params) => {
  return api('income/add', 'POST', JSON.stringify(params))
}

export const postUpdateIncome = (params) => {
  return api('income/update', 'POST', JSON.stringify(params))
}