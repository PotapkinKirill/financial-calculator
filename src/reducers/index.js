import {combineReducers} from 'redux'
import categories from './categories'
import payments from './payments'
import incomes from './incomes'

const rootReducers = combineReducers({
  categories,
  payments,
  incomes
});

export default rootReducers