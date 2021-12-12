import React, { createContext, useContext, useReducer } from 'react';

const MoneyContext = createContext(null);
const LoveContext = createContext(null);
const HealthContext = createContext(null);
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

  return (
    <MoneyContext.Provider value={state.money}>
      <LoveContext.Provider value={state.love}>
        <HealthContext.Provider value={state.health}>
          <DispatchContext.Provider value={dispatch}>
            {children}
          </DispatchContext.Provider>
        </HealthContext.Provider>
      </LoveContext.Provider>
    </MoneyContext.Provider>
  );
};

const CONTEXT = {
  love: LoveContext,
  health: HealthContext,
  money: MoneyContext,
};

export const useSettings = (setting) => useContext(CONTEXT[setting]);
export const useDispatch = () => useContext(DispatchContext);

export default Provider;
