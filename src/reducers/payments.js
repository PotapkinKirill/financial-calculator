export default function payments(state = [], action) {
  switch (action.type) {
    case 'ADD_PAYMENT':
      console.log(action)
      return [...state, action.payload]
    default:
      return state
  }
}