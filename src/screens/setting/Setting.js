import React from 'react';
import {View, Linking} from 'react-native';
import {SafeAreaView, Header} from '@common/components';
import {useNavigation} from '@react-navigation/native';
import ListItem from '../../common/components/listitem/ListItem';
import {signOut} from '../../redux/auth/actions';
import {useDispatch} from 'react-redux';
import NavigationService from '@utils/navigation';
import {mainStack} from '@config/navigator';

const Setting = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  return (
    <SafeAreaView>
      <Header
        title={'Options'}
        back_header={'Home'}
        onBack={() => navigation.goBack()}
      />
      <View>
        <ListItem
          title={'Theme'}
          iconName={'keyboard-arrow-right'}
          onPress={() => {
            NavigationService.navigate(mainStack.theme);
          }}
        />
        <ListItem
          title={'Fixer.io'}
          iconName={'share'}
          onPress={() => {
            Linking.openURL('https://apilayer.com/').catch(err =>
              console.error('An error occurred', err),
            );
          }}
        />
        <ListItem
          title={'Logout'}
          iconName={'logout'}
          onPress={() => {
            dispatch(signOut());
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default Setting;
