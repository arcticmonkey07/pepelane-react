import { getVehicles } from '../../api/request';
import { SET_DARK, SET_LOADED, SET_VEHICLES } from '../constants';
import { VehiclesActionTypes } from '../types';

export const fetchVehicles = () => (dispatch) => {
  dispatch({
    type: SET_LOADED,
    payload: false,
  });

  getVehicles().then((data) => {
    dispatch(setVehicles(data));
  });
};

export const setVehicles = (items: Array<Object>): VehiclesActionTypes => ({
  type: SET_VEHICLES,
  payload: items,
});

export const setDarkMode = (dark: boolean): VehiclesActionTypes => ({
  type: SET_DARK,
  payload: dark
})