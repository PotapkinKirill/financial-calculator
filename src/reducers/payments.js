export default function payments(state = [], action) {
  switch (action.type) {
    case 'ADD_PAYMENT':
      return [...state, action.payload]
    case 'UPDATE_PAYMENT':
      return [...state, action.payload]
    case 'LOAD_PAYMENTS':
      return action.payload
    default:
      return state
  }
}
