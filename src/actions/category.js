import {
  getCategories,
  postCategoriesSum,
  postAddCategory,
  postUpdateCategory,
  postDeleteCategory
} from '../api/category'

export const loadCategories = () => dispatch => {
  getCategories()
    .then(({categories}) => {
      dispatch({ type: 'LOAD_CATEGORIES', payload: categories})
    })
    .catch((response) => { console.log('%cERROR:','background-color: red; padding: 5px', 'loadCategories', response)})
}

export const loadCategoriesSum = (params) => dispatch => {
  postCategoriesSum(params)
    .then(({categories}) => {
      dispatch({ type: 'LOAD_CATEGORIES_SUM', payload: categories})
    })
    .catch((response) => { console.log('%cERROR:','background-color: red; padding: 5px', 'loadCategoriesSum', response)})
}

export const addCategory = (params) => dispatch => {
  postAddCategory(params)
    .then(({category}) => {
      dispatch({ type: 'ADD_CATEGORY', payload: category})
    })
    .catch((response) => { console.log('%cERROR:','background-color: red; padding: 5px', 'addCategory', response)})
}

export const updateCategory = (params) => dispatch => {
  postUpdateCategory(params)
    .then(({category}) => {
      dispatch({ type: 'UPDATE_CATEGORY', payload: category})
    })
    .catch((response) => { console.log('%cERROR:','background-color: red; padding: 5px', 'updateCategory', response)})
}

export const deleteCategory = (params) => dispatch => {
  postDeleteCategory(params)
    .then(() => {
      dispatch({ type: 'DELETE_CATEGORY', payload: params})
    })
    .catch((response) => { console.log('%cERROR:','background-color: red; padding: 5px', 'deleteCategory', response)})
}