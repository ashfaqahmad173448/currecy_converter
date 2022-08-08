import {createSelector} from 'reselect';

export const rootCommon = state => state.common;

export const loadingSelector = createSelector(rootCommon, data =>
  data.get('loading'),
);
export const themeSelector = createSelector(rootCommon, data => {
  return data.get('theme');
});
