import { UPDATE_SETTING } from './actions';

export const INITIAL_STATE = {
  money: true,
  health: true,
  love: true,
};

const updateSetting = (state, action) => ({
  ...state,
  [action.payload.setting]: !!action.payload.value,
});

export default {
  name: 'setting',
  initialState: INITIAL_STATE,
  handlers: {
    [UPDATE_SETTING]: updateSetting,
  },
};
