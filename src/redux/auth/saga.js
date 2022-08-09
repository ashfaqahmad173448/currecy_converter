import {call, put, takeEvery} from 'redux-saga/effects';
import {showMessage} from 'react-native-flash-message';
import * as Actions from './constants';
import {loginWithUsername} from './service';
import {signOut} from './actions';

function* signInWithUserName({username, password}) {
  try {
    const user = yield call(loginWithUsername, {
      username,
      password,
    });
    yield call(doLoginSuccess, user);
    showMessage({
      message: 'Login Successfully',
      type: 'success',
    });
    showMessage('Login Successfully');
  } catch (e) {
    showMessage({
      message: e.message,
      type: 'danger',
    });
  }
}

function* doLoginSuccess(user = {}) {
  yield put({
    type: Actions.SIGN_IN_SUCCESS,
    payload: {user},
  });
}

export default function* authSaga() {
  yield takeEvery(Actions.SIGN_IN, signInWithUserName);
  yield takeEvery(Actions.SIGN_OUT, signOut);
}
