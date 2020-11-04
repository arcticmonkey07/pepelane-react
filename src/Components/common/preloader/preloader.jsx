import React from 'react';
import classes from './preloader.module.css';
import preloaderImage from '../../../assets/img/preloader.gif';

function Preloader() {
  return (
    <>
      <img className={classes.preloader} src={preloaderImage} alt="preloaderImage"/>
    </>
  )
}

export default Preloader;