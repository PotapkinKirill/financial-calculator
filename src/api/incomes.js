import api from './api'

export const getLoadIncomes = () => {
  return api('incomes/', 'GET')
}

export const postAddIncome = (params) => {
  return api('incomes/', 'POST', JSON.stringify(params))
}

export const postUpdateIncome = (params) => {
  return api('incomes/' + params.id, 'POST', JSON.stringify(params))
}