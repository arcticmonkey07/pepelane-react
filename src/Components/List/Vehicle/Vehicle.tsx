import React, { FC } from 'react';
import classes from './Vehicle.module.css';
import { useSelector } from 'react-redux';

type PropsType = {
  preview: string,
  name: string,
  type: string,
  description: string,
  rent: number
}

const Vehicle: FC<PropsType> = ({ preview, name, type, description, rent }) => {
  const isDark = useSelector(({ vehicles }: any) => vehicles.isDark);

  return (
    <li className={`${classes.listItem} ${isDark ? classes.dark : ''}`}>
      <a className={classes.listItemLink} href="#">
        <img className={classes.itemImg} src={preview} alt="preview" />
        <div className={classes.itemContent}>
          <h3 className={classes.itemTitle}>{name}</h3>
          <p>{type}</p>
          <p className={classes.itemDescription}>{description}</p>
          <span className={classes.itemRent}>{rent} $/h</span>
        </div>
      </a>
    </li>
  )
}

export default Vehicle;
