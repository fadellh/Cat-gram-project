import {combineReducers} from 'redux';
import {authReducer} from './authReducer';
import { getReducer } from './getReducer';

export default combineReducers({
  auth: authReducer,
  getData:getReducer
});