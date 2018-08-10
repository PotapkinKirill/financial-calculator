import api from './api'

export const getPaymentsCategory = () => {
  return api('categories/payments', 'GET')
}

export const getIncomesCategory = () => {
  return api('categories/incomes', 'GET')
}