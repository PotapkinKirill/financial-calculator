export default function payments(state = [], action) {
  switch (action.type) {
    case 'ADD_PAYMENT':
      return [...state, action.payload]
    case 'UPDATE_PAYMENT':
      return update(state, action)
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