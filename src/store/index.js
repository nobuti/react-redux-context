import createReducer from '~/services/createReducer';
import settings from '~/store/settings/reducer';
import theme from '~/store/theme/reducer';

export default [settings, theme].reduce(
  (memo, r) => ({
    ...memo,
    [r.name]: createReducer(r.initialState, r.handlers),
  }),
  {}
);
