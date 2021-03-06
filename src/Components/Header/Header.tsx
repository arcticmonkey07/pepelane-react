import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import classes from "./Header.module.css";
import headerLogo from '../../assets/img/header-logo.svg';
import headerLogoDark from '../../assets/img/header-logo-dark.svg';
import forecastIcon from '../../assets/img/ic-forecast.svg';
import avatarImg from '../../assets/img/avatar.png';
import { setDarkMode } from '../../redux/actions/vehicles';
import { NavLink } from 'react-router-dom';

const Header = () => {
  const dispatch = useDispatch();
  const isDark = useSelector(({ vehicles }: any) => vehicles.isDark);

  useEffect(() => {
    localStorage.setItem('dark', JSON.stringify(isDark));
  }, [isDark]);

  const darkModeHandler = () => {
    dispatch(setDarkMode(isDark));
  };

  return (
    <div className={`${isDark ? classes.dark : ''}`}>
      <div className={classes.header}>
        <div className={classes.left}>
          <NavLink className={classes.logo} to='/'>
            {isDark 
              ? <img className={classes.logoImg} src={headerLogoDark} alt="logo" /> 
              : <img className={classes.logoImg} src={headerLogo} alt="logo" />
            }
            {/* <img className="logoImgMob" src="../assets/img/header-logo-mob.svg" alt="logo" /> */}
          </NavLink>
          <span className={classes.promoText}>World's first affordable airsharing</span>
        </div>

        <div className={classes.right}>
          <NavLink className={classes.forecastLink} to='/forecast'>
            <img className={classes.forecastIcon} src={forecastIcon} alt="forecastIcon"/>
            <span className={classes.forecastText}>get Forecast</span>
          </NavLink>

          <a className={classes.nightContainer} onClick={darkModeHandler} href="#">
            <i className={classes.nightModeIcon}></i>
            <span className={classes.nightMode}>
              {isDark ? 'Night mode' : 'Day mode'}
            </span>
          </a>

          <div className={classes.buttons}>
            <a href="#" className={classes.questions}></a>
            <a href="#" className={classes.bell}></a>
          </div>

          <a href="#" className={classes.profile}>
            <span className={classes.name}>Bessie Cooper</span>
            <img
              src={avatarImg}
              className={classes.avatar}
              alt="avatar"
            />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Header;
