import React, { FC } from 'react';

type PropsType = {
  preview: string,
  name: string,
  type: string,
  description: string,
  rent: number
}

const Vehicle: FC<PropsType> = ({ preview, name, type, description, rent }) => {
  return (
    <li className="listItem">
      <a className="listItemLink" href="#">
        <img className="itemImg" src={preview} alt="preview" />
        <div className="itemContent">
          <h3 className="itemTitle">{name}</h3>
          <p>{type}</p>
          <p className="itemDescription">{description}</p>
          <span className="itemRent">{rent} $/h</span>
        </div>
      </a>
    </li>
  )
}

export default Vehicle;
