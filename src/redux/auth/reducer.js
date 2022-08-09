import {fromJS} from 'immutable';

import {REHYDRATE} from 'redux-persist/lib/constants';
import * as Actions from './constants';
import {CHANGE_CURRENCY, ON_SUCCESS_COVERSION} from './constants';
import moment from 'moment';

const initState = fromJS({
  isLogin: false,
  isLoading: false,
  currencySymbol: {},
  user: {},
  baseCurrency: 'PKR',
  convertedCurrency: 'USD',
  baseCurrencyAmount: 1,
  convertedCurrencyAmount: '',
  convertedCurrencyDate: moment(),
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

    case Actions.CHANGE_CURRENCY:
      return state.set([action.key], action.value);

    case Actions.ON_SUCCESS_COVERSION:
      return state
        .set('convertedCurrencyAmount', action.payload.rate)
        .set('convertedCurrencyDate', action.payload.date);

    case Actions.REVERSE_CURRENCY:
      return state
        .set('baseCurrency', state.get('convertedCurrency'))
        .set('convertedCurrency', state.get('baseCurrency'));

    case Actions.SIGN_OUT:
      return initState;

    case Actions.SAVE_CURRENCEY_SYMBOL:
      return state.set('currencySymbol', fromJS(action.payload));

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
