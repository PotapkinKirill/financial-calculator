import api from './api'

export const getLoadPayments = () => {
  return api.get('payments/')
}

export const postAddPayment = (params) => {
  return api.post('payments/', JSON.stringify(params))
}

export const putUpdatePayment = (params) => {
  return api.put('payments/' + params.id, JSON.stringify(params))
}
