import {createSelector} from 'reselect';

export const auth = state => state.auth;
export const authSelector = createSelector(auth, data => data.toJS());

export const isLoginSelector = createSelector(auth, data =>
  data.get('isLogin'),
);

export const isLoadingSelector = createSelector(auth, data =>
  data.get('isLoading'),
);
