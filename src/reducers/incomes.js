export default function incomes(state = [], action) {
  switch (action.type) {
    case 'ADD_INCOME':
      return [...state, addPayment(state, action).payload]
    case 'UPDATE_INCOME':
      return update(state, action)
    case 'LOAD_INCOMES':
      return action.payload
    default:
      return state
  }
}

const update = (state, action) => {
  return state.map(elem =>
    (elem.category === action.payload.category)
      ? {...elem, price: action.payload.price, sum: elem.sum + action.payload.price}
      : elem
  )
}

const addPayment = (state, action) => {
  (state && state.length)
    ? action.payload.id = state[state.length - 1].id + 1
    : action.payload.id = 1
  return action
}