import React from 'react';
import {View, Linking} from 'react-native';
import {SafeAreaView, Header} from '@common/components';
import {useNavigation} from '@react-navigation/native';
import ListItem from '../../common/components/listitem/ListItem';
import {signOut} from '../../redux/auth/actions';
import {useDispatch} from 'react-redux';
import {THEME_LIST} from '../../common/components/config';
import {switchTheme} from '../../redux/common/actions';

const ThemeSetting = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  return (
    <SafeAreaView>
      <Header
        title={'Theme'}
        back_header={'Options'}
        onBack={() => navigation.goBack()}
      />
      <View>
        {THEME_LIST.map(({key, title, color}) => {
          return (
            <ListItem
              key={key}
              title={title}
              color={color}
              iconName={'circle'}
              onPress={() => {
                dispatch(switchTheme(key));
              }}
            />
          );
        })}
      </View>
    </SafeAreaView>
  );
};

export default ThemeSetting;
