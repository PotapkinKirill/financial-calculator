import api from './api'

export const getPayments = () => {
  return api('payment/all', 'GET')
}

export const postAddPayment = (params) => {
  return api('payment/add' , 'POST', JSON.stringify(params))
}

export const postUpdatePayment = (params) => {
  return api('payment/update', 'POST', JSON.stringify(params))
}
