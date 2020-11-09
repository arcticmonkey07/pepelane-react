import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import classes from './Content.module.css';

import Header from '../Header/Header';
import List from '../List/List';

const Content: FC = () => {
  const isDark = useSelector(({ vehicles }: any) => vehicles.isDark);

  return (
    <div className={`${classes.container} ${isDark ? classes.dark : ''}`}>
      <Header />
      <List />
    </div>
  )
}

export default Content;