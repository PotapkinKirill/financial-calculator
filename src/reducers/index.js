import {combineReducers} from 'redux'
import payments from './payments'
import incomes from './incomes'

const rootReducers = combineReducers({
  payments,
  incomes
});

export default rootReducers