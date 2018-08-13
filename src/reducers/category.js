const initState = {
  payments: [],
  incomes: []
}

export default function category(state = initState, action) {
  switch (action.type) {
    case 'LOAD_PAYMENTS_CATEGORY':
      return {...state, payments: action.payload}
    case 'LOAD_INCOMES_CATEGORY':
      return {...state, incomes: action.payload}
    case 'UPDATE_PAYMENTS_CATEGORY':
      return {...state, payments: [...state.payments, action.payload]}
    default:
      return state
  }
}
