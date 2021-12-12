import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import classNames from 'classnames';

import { updateTheme } from '~/store/theme/actions';
import { THEMES } from '~/config';
import DarkIcon from './DarkIcon';
import LightIcon from './LightIcon';
import styles from './styles.module.css';

const DarkMode = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.current);
  const clickHandler = () => dispatch(updateTheme());
  const cssTheme = theme === THEMES.light ? styles.light : styles.dark;

  return (
    <button
      type="button"
      className={classNames(styles.button, cssTheme)}
      onClick={clickHandler}
    >
      {theme === THEMES.light ? <DarkIcon /> : <LightIcon />}
    </button>
  );
};

export default DarkMode;
