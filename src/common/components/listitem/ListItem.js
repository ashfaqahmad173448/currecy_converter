import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {Text} from '@common/components';
import Icon from 'react-native-vector-icons/MaterialIcons';

const ListItem = ({
  title,
  onPress,
  iconName = 'keyboard-arrow-right',
  color = '#000',
}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text h6 medium>
        {title}
      </Text>
      <Icon name={iconName} size={20} color={color} />
    </TouchableOpacity>
  );
};

export default ListItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 0.5,
    borderBottomColor: '#adb5bd',
    paddingVertical: 15,
    paddingHorizontal: 10,
  },
});
