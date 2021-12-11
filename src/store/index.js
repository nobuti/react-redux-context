import createReducer from '~/services/createReducer';
import settings from '~/store/settings/reducer';

export default [settings].reduce(
  (memo, r) => ({
    ...memo,
    [r.name]: createReducer(r.initialState, r.handlers),
  }),
  {}
);
