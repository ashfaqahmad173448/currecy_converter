import React from 'react';
import {ThemeProvider} from 'styled-components/native';
import Router from '@navigation/root-switch';
import {StatusBar} from 'react-native';
import {themeSelector} from './redux/common/selectors';
import {connect} from 'react-redux';
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
} from './components/config';

const AppRouter = ({theme}) => {
  const getColorTheme = themeKey => {
    console.log(themeKey);
    console.log(LIGHT);
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
    </ThemeProvider>
  );
};

const mapStateToProps = state => {
  return {
    theme: themeSelector(state),
  };
};
export default connect(mapStateToProps)(AppRouter);
