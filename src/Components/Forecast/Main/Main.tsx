import React, { FC, ChangeEvent, useState, useEffect } from 'react';
import classes from './Main.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { setCity, delCity } from '../../../redux/actions/weather';
import { Input, Typography, Tag } from 'antd';
import Geocode from "react-geocode";

import { ICity } from '../../../redux/types';
import ForecastTable from '../ForecastTable/ForecastTable';
import ENV from '../../../env';

const { Search } = Input;
const { Title } = Typography;

Geocode.setApiKey(ENV.GOOGLE_API_KEY);
Geocode.setLanguage('ru');
Geocode.setRegion('ru');

const Main: FC = () => {
  const dispatch = useDispatch();
  const cities = useSelector((state: any) => state.weather.cities);
  const geolocationCity = useSelector((state: any) => state.weather.geolocationCity);
  const [town, setTown] = useState<string>('');

  useEffect(() => {
    getCoordinates(geolocationCity);
  }, [geolocationCity]);

  useEffect(() => {
    localStorage.setItem('cities', JSON.stringify(cities));
  }, [cities]);

  const getCoordinates = (city: string): void => {
    if (city) {
      Geocode.fromAddress(city).then(
        (response) => {
          const { lat, lng } = response.results[0].geometry.location;
          const { long_name } = response.results[0].address_components[0];

          const excludeSimilar = cities.map((item: any) => item.cityName === long_name);

          if (excludeSimilar.includes(true)) {
            return;
          }
          else {
            let api = `http://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lng}&units=metric&exclude=minutely,hourly&appid=${ENV.OPEN_WEATHER_KEY}`;

            fetch(api)
              .then((response) => response.json())
              .then((data) => {
                const item = {
                  id: Date.now(),
                  cityName: long_name,
                  forecast: data.daily,
                };
                // console.log(data);
                dispatch(setCity(item));
              });
          }
        },
        (error) => console.error(error)
      );
    }
  };


  const cityHandleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setTown(e.target.value);
  }

  const onAdd = (): void => {
    getCoordinates(town);
    setTown('');
  };

  const delHandler = (id: number): void => {
    dispatch(delCity(id));
  };

  return (
    <>
      <div className={classes.container}>
        <div className={classes.main}>
          <Title className={classes.title} level={3}>Добавьте город</Title>
          <Search className={classes.input} placeholder="input city" onSearch={onAdd} onChange={cityHandleChange} value={town} enterButton="Add" />
          <div className={classes.citiesContainer}>
            {cities.length ? cities.map((item: ICity) => <Tag className={classes.city} closable onClose={() => delHandler(item.id)} key={item.id}>{item.cityName}</Tag>) : ''}
          </div>
        </div>
      </div>
      {cities.length ? cities.map((item: ICity) => <ForecastTable key={item.id} cityName={item.cityName} forecast={item.forecast} />) : ''}
    </>
  )
}

export default Main;
