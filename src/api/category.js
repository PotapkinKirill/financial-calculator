import { apiNew } from './api'

export const getCategories = (params) => {
  return apiNew.get('categories/', params)
}

export const getCategoriesSum = (params) => {
  return apiNew.get('categories/sum/', {params: params})
}

export const postAddCategory = (params) => {
  return apiNew.post('categories/add/', params)
}

export const putUpdateCategory = (params) => {
  return apiNew.put('categories/' + params.id, params)
}

export const deleteDeleteCategory = (id) => {
  return apiNew.delete('categories/' + id)
}
