import {combineReducers} from 'redux';
import commonReducer from '@redux/common/reducers';

const rootReducers = combineReducers({
  common: commonReducer,
});

export default rootReducers;
