import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchVehicles } from '../redux/actions/vehicles';
import "./Main.css";
import Vehicle from './Vehicle';

const Main = () => {
  const dispatch = useDispatch();
  const items = useSelector(({ vehicles }: any) => vehicles.vehicles);
  const isLoaded = useSelector(({ vehicles }) => vehicles.isLoaded);
  const types = useSelector(({ vehicles }) => vehicles.types);

  const [selectType, setSelectType] = useState<any>('whatever');
  
  // const [types, setTypes] = useState<any[]>([]);
  const [filtredVehicles, setFiltredVehicles] = useState<any[]>([]);
  
  useEffect(() => {
    dispatch(fetchVehicles());
    setFiltredVehicles(items);
  }, [items]);

  useEffect(() => {
    const filtred = items.filter((vehicle: any) => {
      if (vehicle.type === selectType) {
        return true;
      } else if (selectType === 'whatever') {
        return true;
      }
    })
    setFiltredVehicles(filtred);
  }, [selectType])

  const changeTypes = (event: any) => {
    setSelectType(event.target.value);
  }

  // const setTypesHandler = useCallback(
  //   () => {
  //     const vehicleTypes = vehicles.map((item: any) => item.type);
  //     const uniqueTypes = ['whatever', ...new Set(vehicleTypes)];
  //     setTypes(uniqueTypes);
  //   },
  //   [types],
  // )

  return (
    <div className="mainContainer">
      <div className="topContainer">
        <div className="left">
          <span className="leftText">Rent</span>
          <select className="selectType" value={selectType} onChange={changeTypes}>
            {types.map((item: any) => <option key={item} value={item}>{item}</option>)}
          </select>
        </div>

        <a className="right" href="#">
          <span className="rightText">Add new</span>
          <button className="buttonAdd">+</button>
        </a>
      </div>
      <ul className="list">
        {isLoaded 
          ? filtredVehicles.map((item: any) =>
            <Vehicle
              key={item.id}
              preview={item.preview}
              name={item.name}
              type={item.type}
              description={item.description}
              rent={item.rent}
            />)
          : <li>111</li> }
      </ul>
    </div>
  )
}

export default Main;
