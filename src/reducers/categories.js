export default function categories(state = [], action) {
  switch (action.type) {
    case 'LOAD_CATEGORIES':
      return withoutOther(action)
    case 'LOAD_CATEGORIES_SUM':
      return action.payload
    case 'ADD_CATEGORY':
      return [...state, action.payload]
    case 'DELETE_CATEGORY':
      return deleteCategory(state, action)
    default:
      return state
  }
}

const withoutOther = (action) => {
  return (action.payload.filter(elem => elem.name !== 'Other'))
}

const deleteCategory = (state, action) => {
  return (state.filter(elem => elem.id !== action.payload.id))
}
