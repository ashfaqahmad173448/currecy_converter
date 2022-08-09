import {all} from 'redux-saga/effects';
import commonSaga from './redux/common/saga';
import authSaga from './redux/auth/saga';

export default function* rootSagas() {
  yield all([commonSaga(), authSaga()]);
}
