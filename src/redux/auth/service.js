import RestApi from '@utils/rest_api';
import axios from 'axios';
let source = axios.CancelToken.source();

export const loginWithUsername = ({username, password}) =>
  new Promise(resolve =>
    setTimeout(() => {
      resolve({id: 1, name: username});
    }, 5000),
  );

export const getCurrencySymbols = () => {
  const {instance: api} = new RestApi();
  return api.get('symbols');
};

export const convertCurency = ({from, to, amount}) => {
  const {instance: api} = new RestApi();
  if (source) {
    source.cancel('Landing Component got unmounted');
  }
  source = axios.CancelToken.source();
  return api.get(`convert?to=${to}&from=${from}&amount=${amount}`, {
    cancelToken: source.token,
  });
};
