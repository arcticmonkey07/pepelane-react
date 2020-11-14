import { combineReducers } from 'redux';
import vehiclesReducer from './reducers/vehicles';

const rootReducer = combineReducers({
  vehicles: vehiclesReducer,
});

export default rootReducer;