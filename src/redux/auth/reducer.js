import {fromJS} from 'immutable';

import {REHYDRATE} from 'redux-persist/lib/constants';
import * as Actions from './constants';

const initState = fromJS({
  isLogin: false,
  isLoading: false,
  user: {},
  baseCurrency: {},
  convertedCurrency: {},
});

const authReducer = (state = initState, action = {}) => {
  switch (action.type) {
    case Actions.SIGN_IN:
      return state.set('isLoading', true);
    case Actions.SIGN_IN_SUCCESS:
      return state
        .set('user', fromJS(action.payload.user))
        .set('isLogin', true)
        .set('isLoading', false);

    case Actions.SIGN_OUT_SUCCESS:
      return initState;

    case Actions.UPDATE_USER_SUCCESS:
      const userOld = state.get('user');
      const user = {
        ...userOld.toJS(),
        ...action.payload,
      };
      return state.set('user', fromJS(user));

    case REHYDRATE:
      if (action.payload && action.payload.auth) {
        // Restore only user and isLogin state
        const {auth} = action.payload;
        return initState.merge(
          fromJS({
            user: auth.get('user'),
            isLogin: auth.get('isLogin'),
          }),
        );
      } else {
        return state;
      }
    default:
      return state;
  }
};

export default authReducer;
