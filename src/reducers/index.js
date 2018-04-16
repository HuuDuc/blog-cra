import { combineReducers } from 'redux'
import test from './test';
import wordpress from './wordpress';

const reducers = combineReducers({
  test,
  wordpress,
})

const rootReducer = (state, action) => {
  return reducers(state, action)
}

export default rootReducer;
