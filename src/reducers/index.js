import {combineReducers} from 'redux'
import category from './category'
import payments from './payments'
import incomes from './incomes'

const rootReducers = combineReducers({
  category,
  payments,
  incomes
});

export default rootReducers