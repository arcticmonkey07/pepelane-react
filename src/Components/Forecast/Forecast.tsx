import React, { FC } from 'react';
import classes from './Forecast.module.css';
import Main from './Main/Main';
import Geolocation from './Geolocation/Geolocation';

const Forecast: FC = () => {
  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <Main />
        <Geolocation />
      </div>
    </div>
  );
};

export default Forecast;