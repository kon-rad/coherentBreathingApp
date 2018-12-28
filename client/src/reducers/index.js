import { combineReducers } from 'redux';
import appReducers from './appReducers';
import authReducer from './authReducer';

export default combineReducers({
  app: appReducers,
  auth: authReducer
});

