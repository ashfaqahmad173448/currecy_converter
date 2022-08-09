import {combineReducers} from 'redux';
import commonReducer from '@redux/common/reducers';
import authReducer from '@redux/auth/reducer';

const rootReducers = combineReducers({
  common: commonReducer,
  auth: authReducer,
});

export default rootReducers;
