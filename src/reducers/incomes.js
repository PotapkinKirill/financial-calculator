export default function incomes(state = [], action) {
  switch (action.type) {
    case 'ADD_INCOME':
      return [...state, action.payload]
    case 'UPDATE_INCOME':
      return updatePayment(state, action)
    case 'LOAD_INCOMES':
      return action.payload
    default:
      return state
  }
}

const updatePayment = (state, action) => {
  return state.map(elem =>
    (elem.category === action.payload.category)
      ? {...elem, price: action.payload.price, sum: action.payload.sum}
      : elem
  )
}
