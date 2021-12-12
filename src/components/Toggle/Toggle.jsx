/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

import styles from './styles.module.css';

const Toggle = ({ onChange, active, name }) => (
  <div className={styles.container}>
    <input
      id={name}
      name={name}
      className={styles.toggle}
      type="checkbox"
      checked={active}
      onChange={onChange}
    />
    <label className={styles.button} htmlFor={name} />
  </div>
);

export default Toggle;
