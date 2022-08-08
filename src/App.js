/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import type {Node} from 'react';
import React, {useEffect} from 'react';
import RNBootSplash from 'react-native-bootsplash';
import {enableScreens} from 'react-native-screens';
import {NavigationContainer} from '@react-navigation/native';
import NavigationService from '@utils/navigation';
import {SafeAreaProvider} from 'react-native-safe-area-context/src/SafeAreaContext';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import configureStore from './config-store';
import AppRouter from './AppRouter';
const {store, persistor} = configureStore();
enableScreens(false);

const App: () => Node = () => {
  useEffect(() => {
    const init = async () => {
      // …do multiple sync or async tasks
    };
    init().finally(async () => {
      await RNBootSplash.hide({fade: true});
      console.log('Bootsplash has been hidden successfully');
    });
  }, []);
  return (
    <NavigationContainer
      ref={navigationRef =>
        NavigationService.setTopLevelNavigator(navigationRef)
      }>
      <SafeAreaProvider>
        <Provider store={store}>
          <PersistGate persistor={persistor}>
            <AppRouter />
          </PersistGate>
        </Provider>
      </SafeAreaProvider>
    </NavigationContainer>
  );
};

export default App;
