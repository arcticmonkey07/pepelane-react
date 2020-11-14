import { combineReducers } from 'redux';
import vehiclesReducer from './reducers/vehicles';
import weatherReducer from './reducers/weather';

const rootReducer = combineReducers({
  vehicles: vehiclesReducer,
  weather: weatherReducer,
});

export default rootReducer;