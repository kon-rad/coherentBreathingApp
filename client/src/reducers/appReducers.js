import { TOGGLE_THEME } from '../actions/types';
import { PRESET_TIME } from '../actions/types';

const MINUTES_IN_MILLISECONDS = 60 * 1000;

const initialState = {
  darkTheme: false,
  timeSet:  5 * MINUTES_IN_MILLISECONDS,
  active: false
};

export default function (state = initialState, action) {
  console.log('reducer here state ', state, action);

  switch (action.type) {
    case TOGGLE_THEME:
      return {
        darkTheme: !state.darkTheme
      };
    case PRESET_TIME:
      return {
        ...state,
        timeSet: action.time * MINUTES_IN_MILLISECONDS,
        active: true
      };
    default:
      return state;
  }
}