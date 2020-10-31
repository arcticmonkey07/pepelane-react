import React from 'react';
import headerLogo from '../assets/img/header-logo.svg';
import avatarImg from '../assets/img/avatar.png';
import classes from "./Header.module.css";

function Header() {
  return (
    <div className={classes.header}>
      <div className={classes.left}>
        <a href="#" className={classes.logo}>
          {/* <img className="logoImg" src="./assets/img/header-logo-dark.svg" alt="logo" /> */}
          <img className={classes.logoImg} src={headerLogo} />
          {/* <img className="logoImgMob" src="../assets/img/header-logo-mob.svg" alt="logo" /> */}
        </a>
        <span className={classes.promoText}>World's first affordable airsharing</span>
      </div>

      <div className={classes.right}>
        <a className={classes.nightContainer} href="#">
          <i className={classes.nightModeIcon}></i>
          <span className={classes.nightMode}>Day mod</span>
          {/* <span className="nightMode">Night mod</span> */}
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
  )
}

export default Header;
