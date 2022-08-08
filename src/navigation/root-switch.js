import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '@screens/login';
import {authStack} from '../config/navigator';
const Stack = createNativeStackNavigator();

const RootSwitch = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={authStack.login} component={Login} />
    </Stack.Navigator>
  );
};

export default RootSwitch;
