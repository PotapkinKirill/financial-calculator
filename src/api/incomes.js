import api from './api'

export const postLoadIncomes = (params) => {
  return api('income/all', 'POST', JSON.stringify(params))
}

export const postAddIncome = (params) => {
  return api('income/add', 'POST', JSON.stringify(params))
}

export const postUpdateIncome = (params) => {
  return api('income/update', 'POST', JSON.stringify(params))
}