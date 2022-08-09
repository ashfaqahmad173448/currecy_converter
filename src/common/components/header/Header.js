import React from 'react';
import {View, StyleSheet, Platform, TouchableOpacity} from 'react-native';
import {Text} from '@common/components';
import {useTheme} from 'styled-components';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Header = ({title, back_header, onBack}) => {
  const theme = useTheme();
  return (
    <View style={styles.container(theme)}>
      {onBack ? (
        <TouchableOpacity onPress={onBack} style={styles.absolute}>
          <Icon name={'keyboard-arrow-left'} size={20} color={'#0038ab'} />
          <Text h5 light h5Style={{color: '#0038ab'}}>
            {back_header}
          </Text>
        </TouchableOpacity>
      ) : null}
      <Text h5 medium h5Style={{textAlign: 'center'}}>
        {title}
      </Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  absolute: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    flexDirection: 'row',
    alignItems: 'center',
  },
  container: theme => ({
    paddingHorizontal: 10,
    paddingVertical: 15,
    backgroundColor: theme.colors.bgColor,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    ...Platform.select({
      android: {
        elevation: 5,
      },
      ios: {
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,
      },
    }),
  }),
});
