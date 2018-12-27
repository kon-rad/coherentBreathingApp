import { TOGGLE_THEME } from '../actions/types';

const initialState = { darkTheme: false };

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