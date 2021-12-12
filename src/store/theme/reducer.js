import { THEMES } from '~/config';
import { UPDATE_THEME } from './actions';

export const INITIAL_STATE = {
  current: THEMES.light,
};

const updateTheme = (state) => ({
  ...state,
  current: state.current === THEMES.light ? THEMES.dark : THEMES.light,
});

export default {
  name: 'theme',
  initialState: INITIAL_STATE,
  handlers: {
    [UPDATE_THEME]: updateTheme,
  },
};
