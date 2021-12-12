import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Toggle from '~/components/Toggle';
import { updateSetting } from '~/store/settings/actions';

import styles from './styles.module.css';

const Setting = ({ id, name }) => {
  const dispatch = useDispatch();
  const checked = useSelector((state) => state.setting[id]);
  const onChange = () =>
    dispatch(updateSetting({ setting: id, value: !checked }));

  // eslint-disable-next-line no-console
  console.log(`Setting ${id} rendered`);

  return (
    <div className={styles.container}>
      <h4 className={styles.label}>{name}</h4>
      <div className={styles.toggle}>
        <Toggle name={name} onChange={onChange} active={checked} />
      </div>
    </div>
  );
};

export default Setting;
