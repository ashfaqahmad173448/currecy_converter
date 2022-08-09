import * as Actions from './constants';

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
