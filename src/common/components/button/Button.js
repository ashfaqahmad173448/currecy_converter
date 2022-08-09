import React from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';
import Text from '../text/Text';
import {useTheme} from 'styled-components';

const Button = ({title, buttonClick, containerStyle}) => {
  const theme = useTheme();
  return (
    <TouchableOpacity
      style={StyleSheet.flatten([
        styles.container(theme),
        {
          borderRadius: 10,
        },
        containerStyle,
      ])}
      onPress={buttonClick}
      activeOpacity={0.3}>
      <Text h5 h5Style={{color: '#fff'}}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: theme => ({
    marginHorizontal: 10,
    flexDirection: 'row',
    paddingVertical: 10,
    fontSize: 12,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.grey8,
  }),
});
