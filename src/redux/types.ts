import { SET_LOADED, SET_VEHICLES, SET_DARK } from './constants';
import { SET_CITY, DEL_CITY, SET_GEO_CITY } from './constants';

// vehicle
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

// weather
export interface IWeatherState {
  cities: Array<Object>
  geolocationCity: string
}

export interface ICity {
  id: number
  cityName: string
  forecast: []
}

// Actions
interface ISetCityAction {
  type: typeof SET_CITY,
  payload: ICity
}

interface IDelCityAction {
  type: typeof DEL_CITY,
  payload: number
}

interface ISetGeoCityAction {
  type: typeof SET_GEO_CITY,
  payload: string
}

export type WeatherActionTypes = ISetCityAction | IDelCityAction | ISetGeoCityAction;