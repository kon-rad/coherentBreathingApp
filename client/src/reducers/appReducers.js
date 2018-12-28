import { TOGGLE_THEME } from '../actions/types';

const MINUTES_IN_MILLISECONDS = 60 * 1000;

const initialState = {
  darkTheme: false,
  timeSet:  5 * MINUTES_IN_MILLISECONDS,
  active: false
};

export default function (state = initialState, action) {

  switch (action.type) {
    case TOGGLE_THEME:
      return {
        darkTheme: !state.darkTheme
      };
    default:
      return state;
  }
}