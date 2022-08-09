import * as Actions from './constants';

export function currencyConverter({from, to, amount}, cb: () => {}) {
  return {type: Actions.CONVERT_CURRENCY, from, to, amount, cb};
}

export function downloadCurrencies() {
  return {type: Actions.DOWNLOAD_CURRENCY_SYMBOL};
}

export function changeCurrencyValue({key, value}) {
  return {type: Actions.CHANGE_CURRENCY, key, value};
}

export function reverseCurrency() {
  return {type: Actions.REVERSE_CURRENCY};
}

export function signIn({username, password}) {
  return {
    type: Actions.SIGN_IN,
    username,
    password,
  };
}

export function isLogin() {
  return {
    type: Actions.IS_LOGIN,
  };
}

export function updateUserSuccess(data) {
  return {
    type: Actions.UPDATE_USER_SUCCESS,
    payload: data,
  };
}

export function signOut() {
  return {
    type: Actions.SIGN_OUT,
  };
}
