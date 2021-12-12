import React from 'react';
import classnames from 'classnames';

import { useTheme } from '~/context/theme/ThemeProvider';
import { THEMES } from '~/config';
import styles from './styles.module.css';

const Layout = ({ children }) => {
  const { theme } = useTheme();
  const cssTheme = theme === THEMES.light ? styles.light : styles.dark;
  return <div className={classnames(styles.layout, cssTheme)}>{children}</div>;
};

export default Layout;
