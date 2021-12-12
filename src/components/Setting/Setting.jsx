import React from 'react';

import Toggle from '~/components/Toggle';
import {
  useSettings,
  useDispatch,
  ACTIONS,
} from '~/context/setting/SettingProvider';

import styles from './styles.module.css';

const Setting = ({ id, name }) => {
  const settings = useSettings();
  const dispatch = useDispatch();
  const checked = settings[id];

  const onChange = () =>
    dispatch({
      type: ACTIONS.update,
      payload: { setting: id, value: !checked },
    });

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
