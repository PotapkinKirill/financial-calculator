export default function payments(state = [], action) {
  switch (action.type) {
    case 'ADD_PAYMENT':
      return [...state, action.payload]
    case 'UPDATE_PAYMENT':
      return updatePayment(state, action)
    case 'LOAD_PAYMENTS':
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