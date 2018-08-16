import api from './api'

export const getPaymentsCategory = () => {
  return api('categories/payments', 'GET')
}

export const getIncomesCategory = () => {
  return api('categories/incomes', 'GET')
}

export const postAddCategory = (params) => {
  return api('categories/add', 'POST', JSON.stringify(params))
}

export const postUpdateCategory = (params) => {
  return api('categories/update', 'POST', JSON.stringify(params))
}

export const postDeleteCategory = (params) => {
  console.log(params)
  return api('categories/delete', 'POST', JSON.stringify(params))
}