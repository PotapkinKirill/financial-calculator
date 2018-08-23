import api from './api'

export const getLoadIncomes = () => {
  return api.get('incomes/')
}

export const postAddIncome = (params) => {
  return api.post('incomes/', JSON.stringify(params))
}

export const putUpdateIncome = (params) => {
  return api.put('incomes/' + params.id, JSON.stringify(params))
}