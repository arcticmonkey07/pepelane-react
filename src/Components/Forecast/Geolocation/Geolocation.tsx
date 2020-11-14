import React, { FC, useState, useEffect } from 'react';
import classes from './Geolocation.module.css';
import { useDispatch } from 'react-redux';
import { Modal } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';

import { setGeoCity } from '../../../redux/actions/weather';
import ENV from '../../../env';

const Geolocation: FC = () => {
  const dispatch = useDispatch();
  const [visible, setVisible] = useState<boolean>(false);
  const [latitude, setLatitude] = useState<number>();
  const [longitude, setLongitude] = useState<number>();

  useEffect(() => {
    setTimeout(() => {
      setVisible(true);
    }, 500)
  }, []);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position: any) => setLatitude(position.coords.latitude));
      navigator.geolocation.getCurrentPosition((position: any) => setLongitude(position.coords.longitude));
    }
  }, [])

  const handleOk = () => {
    fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${ENV.GOOGLE_API_KEY}`)
      .then(response => response.json())
      .then(data => {

        dispatch(setGeoCity(data.results[8].address_components[0].long_name));
      })
      .catch(error => console.log(error));

    setVisible(false);
  }

  const handleCancel = () => {
    setVisible(false);
  }

  return (
    <>
      <Modal
        title="Confirm"
        visible={visible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <ExclamationCircleOutlined className={classes.geolocationIcon} />
        <span className={classes.geolocationModalText}>Do you allow using your geolocation?</span>
      </Modal>
    </>
  );
};

export default Geolocation;