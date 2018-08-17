export default function incomes(state = [], action) {
  switch (action.type) {
    case 'LOAD_INCOMES':
      return withoutOther(action)
    case 'ADD_INCOME':
      return [...state, action.payload]
    case 'UPDATE_INCOME':
      return [...state, action.payload]
    default:
      return state
  }
}

const withoutOther = (action) => {
  return (action.payload.filter(elem => elem.category !== 'Other'))
}