import { TOGGLE_THEME } from './types';

export const toggleTheme = (payload) => dispatch => {

  dispatch({ type: TOGGLE_THEME, payload });
};