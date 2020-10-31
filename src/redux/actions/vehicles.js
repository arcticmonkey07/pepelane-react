import { getVehicles } from '../../api/request';

export const fetchVehicles = () => (dispatch) => {
  dispatch({
    type: 'SET_LOADED',
    payload: false,
  });

  getVehicles().then((data) => {
    dispatch(setVehicles(data));
  });
};

export const setVehicles = (items) => ({
  type: 'SET_VEHICLES',
  payload: items,
});