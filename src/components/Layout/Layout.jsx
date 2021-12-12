import React from 'react';
import classnames from 'classnames';

import { useSettings } from '~/context/setting/SettingProvider';
import { THEMES } from '~/config';
import styles from './styles.module.css';

const Layout = ({ children }) => {
  const { state } = useSettings();
  const cssTheme = state.theme === THEMES.light ? styles.light : styles.dark;
  return <div className={classnames(styles.layout, cssTheme)}>{children}</div>;
};

export default Layout;
