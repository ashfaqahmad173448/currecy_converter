import React from 'react';
import {mainStack} from '../config/navigator';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
import Setting from '@screens/setting/Setting';
import ThemeSetting from '@screens/setting/ThemeSetting';

const SettingStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={mainStack.setting} component={Setting} />
      <Stack.Screen name={mainStack.theme} component={ThemeSetting} />
    </Stack.Navigator>
  );
};

export default SettingStack;
