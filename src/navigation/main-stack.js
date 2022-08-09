import React from 'react';
import {mainStack} from '../config/navigator';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
import Home from '@screens/home/Home';
import SettingStack from './setting-stack';

const MainStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={mainStack.home} component={Home} />
      <Stack.Screen name={mainStack.settingMain} component={SettingStack} />
    </Stack.Navigator>
  );
};

export default MainStack;
