export default function incomes(state = [], action) {
  switch (action.type) {
    case 'ADD_INCOME':
      return [...state, action.payload]
    case 'UPDATE_INCOME_SUM':
      return state.map(elem =>
        (elem.category === action.payload.category)
          ? {...elem, price: action.payload.price, sum: elem.sum + action.payload.price}
          : elem
      )
    default:
      return state
  }
}