import api from './api'

export const getCategories = () => {
  return api('categories/all', 'GET')
}

export const postCategoriesSum = (params) => {
  return api('categories/all', 'POST', JSON.stringify(params))
}

export const postAddCategory = (params) => {
  return api('categories/add', 'POST', JSON.stringify(params))
}

export const postUpdateCategory = (params) => {
  return api('categories/update', 'POST', JSON.stringify(params))
}

export const postDeleteCategory = (params) => {
  return api('categories/delete', 'POST', JSON.stringify(params))
}