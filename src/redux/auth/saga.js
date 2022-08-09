import {call, put, takeEvery} from 'redux-saga/effects';
import {showMessage} from 'react-native-flash-message';
import * as Actions from './constants';
import {convertCurency, getCurrencySymbols, loginWithUsername} from './service';
import {changeCurrencyValue, signOut} from './actions';

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

function* downloadCurrencySymbol() {
  const currencySymbol = yield call(getCurrencySymbols);
  if (currencySymbol.data.success) {
    yield put({
      type: Actions.SAVE_CURRENCEY_SYMBOL,
      payload: currencySymbol.data.symbols,
    });
  }
}

function* convertCurrency({from, to, amount, cb}) {
  try {
    const currencySymbol = yield call(convertCurency, {from, to, amount});
    if (currencySymbol.data.success) {
      yield put({
        type: Actions.ON_SUCCESS_COVERSION,
        payload: {
          rate: currencySymbol.data.info.rate,
          date: currencySymbol.data.info.date,
        },
      });

      if (cb) {
        yield call(cb, {
          date: currencySymbol.data.date,
          rate: currencySymbol.data.info.rate,
        });
      }
    }
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
  yield takeEvery(Actions.DOWNLOAD_CURRENCY_SYMBOL, downloadCurrencySymbol);
  yield takeEvery(Actions.CONVERT_CURRENCY, convertCurrency);
}
