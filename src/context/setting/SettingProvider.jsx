import React, { createContext, useContext, useReducer } from 'react';

import { THEMES } from '~/config';

const SettingsContext = createContext(null);

export const ACTIONS = {
  update: 'update',
  theme: 'theme',
};

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.update:
      return {
        ...state,
        [action.payload.setting]: action.payload.value,
      };

    case ACTIONS.theme:
      return {
        ...state,
        theme: state.theme === THEMES.light ? THEMES.dark : THEMES.light,
      };

    default:
      return state;
  }
};
const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {
    love: true,
    money: true,
    health: true,
    theme: THEMES.light,
  });

  const value = {
    state,
    dispatch,
  };

  return (
    <SettingsContext.Provider value={value}>
      {children}
    </SettingsContext.Provider>
  );
};

export const useSettings = () => useContext(SettingsContext);

export default Provider;
