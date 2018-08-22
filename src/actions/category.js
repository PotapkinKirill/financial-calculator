import {
  getCategories,
  getCategoriesSum,
  postAddCategory,
  putUpdateCategory,
  deleteDeleteCategory
} from '../api/category'

export const loadCategories = () => dispatch => {
  getCategories()
    .then(({data}) => {
      dispatch({ type: 'LOAD_CATEGORIES', payload: data.categories})
    })
    .catch(error => consoleError(error))
}

export const loadCategoriesSum = (params) => dispatch => {
  getCategoriesSum(params)
    .then(({data}) => {
      dispatch({ type: 'LOAD_CATEGORIES_SUM', payload: data.categories})
    })
    .catch((error) => {
      const response = error
      console.log(response)
    })
}

export const addCategory = (params) => dispatch => {
  postAddCategory(params)
    .then(({data}) => {
      dispatch({ type: 'ADD_CATEGORY', payload: data.category})
    })
    .catch(error => consoleError(error))
}

export const updateCategory = (params) => dispatch => {
  putUpdateCategory(params)
    .then(({data}) => {
      dispatch({ type: 'UPDATE_CATEGORY', payload: data.category})
    })
    .catch(error => {const response = error.response; consoleError(response)})
}

export const deleteCategory = (id) => dispatch => {
  deleteDeleteCategory(id)
    .then(() => {
      dispatch({ type: 'DELETE_CATEGORY', payload: id})
    })
    .catch(error => consoleError(error))
}

const consoleError = (error) => {
  console.log('%cERROR:', 'font-weight: bold; color: white; background-color: red; padding: 5px', error)
}
