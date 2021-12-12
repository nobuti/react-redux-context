import React, { createContext, useContext, useReducer, useMemo } from 'react';

const SettingsContext = createContext(null);
const DispatchContext = createContext(null);

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

  const value = useMemo(
    () => ({
      love: state.love,
      money: state.money,
      health: state.health,
    }),
    [state.love, state.health, state.money]
  );

  return (
    <SettingsContext.Provider value={value}>
      <DispatchContext.Provider value={dispatch}>
        {children}
      </DispatchContext.Provider>
    </SettingsContext.Provider>
  );
};

export const useSettings = () => useContext(SettingsContext);
export const useDispatch = () => useContext(DispatchContext);

export default Provider;
