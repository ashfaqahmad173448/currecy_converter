import * as Actions from './constants';
import {fromJS} from 'immutable';
import {LIGHT} from '../../common/components/config';

export const initState = fromJS({
  loading: false,
  theme: LIGHT,
});

const commonReducer = (state = initState, action = {}) => {
  const {type, payload} = action;
  switch (type) {
    case Actions.CHANGE_THEME:
      return state.set('theme', payload);
    case Actions.IS_LOADING:
      return state.set('loading', payload);
    default:
      return state;
  }
};

export default commonReducer;
