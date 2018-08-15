import api from './api'

export const postLoadPayments = (params) => {
  return api('payment/all', 'POST', JSON.stringify(params))
}

export const postAddPayment = (params) => {
  return api('payment/add' , 'POST', JSON.stringify(params))
}

export const postUpdatePayment = (params) => {
  return api('payment/update', 'POST', JSON.stringify(params))
}
