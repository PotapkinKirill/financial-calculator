export default function incomes(state = [], action) {
  switch (action.type) {
    case 'ADD_INCOME':
      return [...state, action.payload]
    case 'UPDATE_INCOME':
      return [...state, action.payload]
    case 'LOAD_INCOMES':
      return action.payload
    default:
      return state
  }
}
