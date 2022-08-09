import axios from 'axios';
import {API_KEY, BASE_URL} from '../config/api';

export default class RestApi {
  instance = null;

  constructor() {
    this.instance = axios.create({
      baseURL: BASE_URL,
      timeout: 50000,
      headers: {
        apikey: API_KEY,
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });
  }

  static getInstance() {
    if (this.instanceV1 == null) {
      this.instanceV1 = axios.create({
        baseURL: BASE_URL,
        timeout: 50000,
        headers: {
          apikey: API_KEY,
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      });
    }
    return this.instanceV1;
  }
}
