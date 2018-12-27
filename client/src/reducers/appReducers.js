import { TOGGLE_THEME } from '../actions/types';

export default function (state = { darkTheme: false }, action) {
  console.log('reducer here, state: action: ', state, action);

  switch (action.type) {
    case TOGGLE_THEME:
      state.darkTheme = !state.darkTheme;
      return state;
    default:
      return state;
  }
}