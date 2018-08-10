import api from './api'

export const getPayments = () => {
  return api('payment/all', 'GET')
}

export const addPayment = (params) => {
  return api('payment/add' , 'POST', JSON.stringify(params))
}
