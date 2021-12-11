export const UPDATE_SETTING = 'UPDATE_SETTING';

export const updateSetting = ({ setting, value }) => ({
  type: UPDATE_SETTING,
  payload: {
    setting,
    value,
  },
});
