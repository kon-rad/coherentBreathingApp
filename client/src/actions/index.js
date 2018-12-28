import { TOGGLE_THEME } from './types';
import { PRESET_TIME } from './types';

export const toggleTheme = (payload) => dispatch => {

  dispatch({ type: TOGGLE_THEME, payload });
};

export const preSetTime = (time) => dispatch => {
  console.log('pressettime here ', time);

  dispatch({ type: PRESET_TIME, time });
};