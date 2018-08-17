export default function payments(state = [], action) {
  switch (action.type) {
    case 'LOAD_PAYMENTS':
      return withoutOther(action)
    case 'ADD_PAYMENT':
      return [...state, action.payload]
    case 'UPDATE_PAYMENT':
      return [...state, action.payload]
    default:
      return state
  }
}

const withoutOther = (action) => {
  return (action.payload.filter(elem => elem.category !== 'Other'))
}