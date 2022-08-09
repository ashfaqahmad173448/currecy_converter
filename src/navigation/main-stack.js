import React from 'react';
import {mainStack} from '../config/navigator';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
import Home from '@screens/home/Home';
import SettingStack from './setting-stack';
import CurrencyListModal from '../common/components/modal/CurrencyListModal';

const MainStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Group>
        <Stack.Screen name={mainStack.home} component={Home} />
        <Stack.Screen name={mainStack.settingMain} component={SettingStack} />
      </Stack.Group>
      <Stack.Group screenOptions={{presentation: 'modal'}}>
        <Stack.Screen
          name={mainStack.currencyModal}
          component={CurrencyListModal}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default MainStack;
