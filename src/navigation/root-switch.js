import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '@screens/login';
import {authStack, mainStack} from '../config/navigator';
import {isLoginSelector} from '@redux/auth/selectors';
import {connect} from 'react-redux';
import MainStack from './main-stack';
const Stack = createNativeStackNavigator();

const RootSwitch = ({isLogin}) => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {!isLogin ? (
        <Stack.Screen name={authStack.login} component={Login} />
      ) : (
        <Stack.Screen name={mainStack.main} component={MainStack} />
      )}
    </Stack.Navigator>
  );
};

const mapStateToProps = state => {
  return {
    isLogin: isLoginSelector(state),
  };
};

export default connect(mapStateToProps)(RootSwitch);
