import api from './api'

export const getLoadPayments = () => {
  return api('payments/', 'GET')
}

export const postAddPayment = (params) => {
  return api('payments/', 'POST', JSON.stringify(params))
}

export const postUpdatePayment = (params) => {
  return api('payments/' + params.id, 'PUT', JSON.stringify(params))
}
