const initState = {
  payments: [],
  incomes: []
}

export default function category(state = initState, action) {
  switch (action.type) {
    case 'LOAD_PAYMENTS_CATEGORY':
      return { payments: action.payload }
    case 'LOAD_INCOMES_CATEGORY':
      return { incomes: action.payload }
    case 'UPDATE_PAYMENTS_CATEGORY':
      let payments = state.payments
      return {...state, payments: [...payments, action.payload]}
    default:
      return state
  }
}
