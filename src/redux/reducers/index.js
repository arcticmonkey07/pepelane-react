import { combineReducers } from 'redux';
import vehiclesReducer from './vehicles';

const rootReducer = combineReducers({
  vehicles: vehiclesReducer,
});

export default rootReducer;