import axios from 'axios';
import { TOGGLE_THEME } from './types';
import { FETCH_USER } from './types';

export const toggleTheme = (payload) => dispatch => {

  dispatch({ type: TOGGLE_THEME, payload });
};

export const fetchUser = (payload) => async dispatch => {
  const res = await axios.get('/api/current_user');

  dispatch({ type: FETCH_USER, payload: res.data });
};