import React from 'react';
import classNames from 'classnames';

import { useTheme } from '~/context/theme/ThemeProvider';
import { THEMES } from '~/config';
import DarkIcon from './DarkIcon';
import LightIcon from './LightIcon';
import styles from './styles.module.css';

const DarkMode = () => {
  const { theme, toggle } = useTheme();
  const cssTheme = theme === THEMES.light ? styles.light : styles.dark;

  // eslint-disable-next-line no-console
  console.log(`Theme switcher rendered`);

  return (
    <button
      type="button"
      className={classNames(styles.button, cssTheme)}
      onClick={toggle}
    >
      {theme === THEMES.light ? <DarkIcon /> : <LightIcon />}
    </button>
  );
};

export default DarkMode;
