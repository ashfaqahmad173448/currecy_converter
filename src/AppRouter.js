import React, {useEffect} from 'react';
import {StatusBar} from 'react-native';
import {ThemeProvider} from 'styled-components/native';
import FlashMessage from 'react-native-flash-message';
import Router from '@navigation/root-switch';
import {themeSelector} from './redux/common/selectors';
import {Loading} from '@common/components';

import {connect, useDispatch} from 'react-redux';
import {
  BLUE,
  blueColor,
  GREEN,
  greenColor,
  LIGHT,
  lightColor,
  ORANGE,
  orangeColor,
  PURPLE,
  purpleColor,
} from './common/components/config';
import {currencyListSelector} from './redux/auth/selectors';
import {downloadCurrencies} from './redux/auth/actions';

const AppRouter = ({theme, currencyList}) => {
  const dispatch = useDispatch();
  useEffect(() => {
    if (currencyList.isEmpty()) {
      dispatch(downloadCurrencies());
    }
  }, []);

  const getColorTheme = themeKey => {
    if (themeKey === LIGHT) {
      return {barStyle: 'light-content', themeColors: lightColor};
    } else if (themeKey === BLUE) {
      return {barStyle: 'light-content', themeColors: blueColor};
    } else if (themeKey === ORANGE) {
      return {barStyle: 'light-content', themeColors: orangeColor};
    } else if (themeKey === GREEN) {
      return {barStyle: 'light-content', themeColors: greenColor};
    } else if (themeKey === PURPLE) {
      return {barStyle: 'light-content', themeColors: purpleColor};
    } else {
      return {barStyle: 'light-content', themeColors: lightColor};
    }
  };

  const {themeColors, barStyle} = getColorTheme(theme);

  return (
    <ThemeProvider theme={themeColors}>
      <StatusBar barStyle={barStyle} backgroundColor={'transparent'} />
      <Router />
      <Loading />
      <FlashMessage position="top" />
    </ThemeProvider>
  );
};

const mapStateToProps = state => {
  return {
    theme: themeSelector(state),
    currencyList: currencyListSelector(state),
  };
};
export default connect(mapStateToProps)(AppRouter);
