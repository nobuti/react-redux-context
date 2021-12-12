import React from 'react';

import Setting from '~/components/Setting';

import styles from './styles.module.css';

const Settings = () => (
  <div className={styles.container}>
    <h2 className={styles.header}>Life settings</h2>
    <ul className={styles.settings}>
      <li>
        <Setting id="money" name="Money" />
      </li>
      <li>
        <Setting id="love" name="Love" />
      </li>
      <li>
        <Setting id="health" name="Healthy" />
      </li>
    </ul>
  </div>
);

export default Settings;
