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
    default:
      return state
  }
}
