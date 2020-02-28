import PasswordListReducer from './PasswordListReducer';
import { combineReducers } from 'redux';

export default combineReducers({
  passwordList: PasswordListReducer
});
