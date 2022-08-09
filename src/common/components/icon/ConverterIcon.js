import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import {TouchableOpacity} from 'react-native';

const SettingIcon = ({onPress, color = '#fff'}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Icon name={'setting'} color={color} size={25} />
    </TouchableOpacity>
  );
};

export default SettingIcon;
