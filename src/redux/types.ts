import { SET_LOADED, SET_VEHICLES, SET_DARK } from './constants';

export interface IVehiclesState {
  vehicles: Array<Object>,
  isLoaded: boolean,
  types: Array<string>,
  isDark: boolean,
}

interface IFetchVehicles {
  type: typeof SET_LOADED,
  payload: boolean
}

interface ISetVehicles {
  type: typeof SET_VEHICLES,
  payload: Array<Object>
}

interface ISetDarkMode {
  type: typeof SET_DARK,
  payload: boolean
}

export type VehiclesActionTypes = IFetchVehicles | ISetVehicles | ISetDarkMode;