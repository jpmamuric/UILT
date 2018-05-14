import { combineReducers } from 'redux';

import auth from './auth_reducer';
import unicorn from './unicorn_reducer';

const rootReducer = combineReducers({
  auth,
  unicorn
});

export default rootReducer;
