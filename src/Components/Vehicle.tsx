import React, { FC } from 'react';
import classes from './Vehicle.module.css';

type PropsType = {
  preview: string,
  name: string,
  type: string,
  description: string,
  rent: number
}

const Vehicle: FC<PropsType> = ({ preview, name, type, description, rent }) => {
  return (
    <li className={classes.listItem}>
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
