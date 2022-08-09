import * as Actions from './constants';

export function switchTheme(payload) {
  return {
    type: Actions.CHANGE_THEME,
    payload: payload,
  };
}
