import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {SafeAreaView, Text, Input, Button} from '@common/components';
import {useDispatch} from 'react-redux';
import {signIn} from '../../redux/auth/actions';

const Login = () => {
  const disptach = useDispatch();
  const [userName, setUserName] = useState('');
  const [userNameError, setUserNameError] = useState('');
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const onLogin = () => {
    let allIsWell = true;
    if (userName.trim() === '') {
      setUserNameError('Type UserName');
      allIsWell = false;
    }
    if (password.trim() === '') {
      setPasswordError('Type Password');
      allIsWell = false;
    }
    if (password.trim().length <= 7) {
      setPasswordError('Password length should be greater than 7 digits');
      allIsWell = false;
    }

    if (allIsWell) {
      disptach(signIn({username: userName, password}));
    }
  };

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text h1 h1Style={{marginHorizontal: 10}}>
          Login
        </Text>
        <Input
          placeholder={'User Name'}
          value={userName}
          errorMessage={userNameError}
          onChangeText={text => {
            setUserName(text);
            setUserNameError('');
          }}
        />
        <Input
          containerStyle={styles.margin}
          secureTextEntry={true}
          placeholder={'Password'}
          value={password}
          errorMessage={passwordError}
          onChangeText={text => {
            setPassword(text);
            setPasswordError('');
          }}
        />
        <Button
          containerStyle={styles.margin}
          title={'Login'}
          buttonClick={onLogin}
        />
      </View>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  margin: {
    marginTop: 10,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    // alignItems: 'center',
  },
});
