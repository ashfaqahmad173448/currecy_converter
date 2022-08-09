import {createSelector} from 'reselect';

export const auth = state => state.auth;
export const authSelector = createSelector(auth, data => data.toJS());

export const isLoginSelector = createSelector(auth, data =>
  data.get('isLogin'),
);

export const isLoadingSelector = createSelector(auth, data =>
  data.get('isLoading'),
);

export const currencyListSelector = createSelector(auth, data =>
  data.get('currencySymbol'),
);

export const getBaseCurrencySelector = createSelector(auth, data =>
  data.get('baseCurrency'),
);

export const getConvertedCurrencySelector = createSelector(auth, data =>
  data.get('convertedCurrency'),
);

export const getBaseCurrencyAmountSelector = createSelector(auth, data =>
  data.get('baseCurrencyAmount'),
);

export const getConvertedCurrencyAmountSelector = createSelector(auth, data =>
  data.get('convertedCurrencyAmount'),
);

export const getConvertedDatetSelector = createSelector(auth, data =>
  data.get('convertedCurrencyDate'),
);
