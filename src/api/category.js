import api from './api'

export const getCategories = (params) => {
  return api.get('categories/', params)
}

export const getCategoriesSum = (params) => {
  return api.get('categories/sum/', {params: params})
}

export const postAddCategory = (params) => {
  return api.post('categories/', params)
}

export const putUpdateCategory = (params) => {
  return api.put('categories/' + params.id, params)
}

export const deleteDeleteCategory = (id) => {
  return api.delete('categories/' + id)
}
