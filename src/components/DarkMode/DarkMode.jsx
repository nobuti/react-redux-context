import React from 'react';
import classNames from 'classnames';

import { useSettings, ACTIONS } from '~/context/setting/SettingProvider';
import { THEMES } from '~/config';
import DarkIcon from './DarkIcon';
import LightIcon from './LightIcon';
import styles from './styles.module.css';

const DarkMode = () => {
  const { state, dispatch } = useSettings();
  const cssTheme = state.theme === THEMES.light ? styles.light : styles.dark;
  const toggle = () => {
    dispatch({ type: ACTIONS.theme });
  };

  // eslint-disable-next-line no-console
  console.log(`Theme switcher rendered`);

  return (
    <button
      type="button"
      className={classNames(styles.button, cssTheme)}
      onClick={toggle}
    >
      {state.theme === THEMES.light ? <DarkIcon /> : <LightIcon />}
    </button>
  );
};

export default DarkMode;
