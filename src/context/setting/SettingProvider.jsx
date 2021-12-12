import React, { createContext, useContext, useReducer } from 'react';

const SettingsContext = createContext(null);

export const ACTIONS = {
  update: 'update',
};

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.update:
      return {
        ...state,
        [action.payload.setting]: action.payload.value,
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
