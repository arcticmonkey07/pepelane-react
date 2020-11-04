import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchVehicles } from '../redux/actions/vehicles';
import Preloader from './common/preloader/preloader';
import classes from "./Main.module.css";
import Vehicle from './Vehicle';

interface IFiltredVehicles {
  id: string
  name: string
  type: string
  preview: string
  image: string
  description: string
  specifications_text: string
  team_text: string
  term_text: string
  rent: number
}

const Main = () => {
  const dispatch = useDispatch();
  const items = useSelector(({ vehicles }: any) => vehicles.vehicles);
  const isLoaded = useSelector(({ vehicles }) => vehicles.isLoaded);
  const types = useSelector(({ vehicles }) => vehicles.types);

  const [selectType, setSelectType] = useState<string>('whatever');
  
  // const [types, setTypes] = useState<any[]>([]);
  const [filtredVehicles, setFiltredVehicles] = useState<IFiltredVehicles[]>([]);
  
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

  const changeTypes = (event: React.ChangeEvent<HTMLSelectElement>) => {
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
    <div className={classes.mainContainer}>
      <div className={classes.topContainer}>
        <div className={classes.left}>
          <span className={classes.leftText}>Rent</span>
          <select className={classes.selectType} value={selectType} onChange={changeTypes}>
            {types.map((item) => <option key={item} value={item}>{item}</option>)}
          </select>
        </div>

        <a className={classes.right} href="#">
          <span className={classes.rightText}>Add new</span>
          <button className={classes.buttonAdd}>+</button>
        </a>
      </div>
      <ul className={classes.list}>
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
          : <Preloader /> }
      </ul>
    </div>
  )
}

export default Main;
