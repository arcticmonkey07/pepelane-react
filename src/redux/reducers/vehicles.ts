import { IVehiclesState, VehiclesActionTypes } from '../types';
import { SET_VEHICLES, SET_DARK, SET_LOADED } from './../constants';

const savedMode = JSON.parse(localStorage.getItem('dark') || '');

const initialState: IVehiclesState = {
  vehicles: [],
  isLoaded: false,
  types: ['whatever', 'airship', 'rocket', 'helicopter', 'plane', 'custom'],
  isDark: savedMode,
};

const vehicles = (state = initialState, action: VehiclesActionTypes) => {
  switch (action.type) {
    case SET_VEHICLES:
      return {
        ...state,
        vehicles: action.payload,
        isLoaded: true,
      };
    case SET_LOADED:
      return {
        ...state,
        isLoaded: action.payload,
      };
    case SET_DARK:
      return {
        ...state,
        isDark: !action.payload,
      };
    default:
      return state;
  }
};

export default vehicles;
