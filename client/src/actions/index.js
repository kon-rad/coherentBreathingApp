import { TOGGLE_THEME } from './types';

export const toggleTheme = (payload) => dispatch => {
  console.log('toggleTheme called: payload: ', payload);

  dispatch({ type: TOGGLE_THEME, payload });
};