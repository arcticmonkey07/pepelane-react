import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import classes from './Content.module.css';
import { Switch, Route } from 'react-router-dom';

import Forecast from '../Forecast/Forecast';

import List from '../List/List';

const Content: FC = () => {
  const isDark = useSelector(({ vehicles }: any) => vehicles.isDark);

  return (
    <div className={`${classes.container} ${isDark ? classes.dark : ''}`}>
      <Switch>
        <Route path='/' exact>
          <List  />
        </Route>
        <Route path='/forecast'>
          <Forecast />
        </Route>
      </Switch>
    </div>
  )
}

export default Content;