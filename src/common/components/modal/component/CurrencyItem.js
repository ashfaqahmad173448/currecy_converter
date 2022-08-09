import React from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';
import {Text} from '@common/components';
import Icon from 'react-native-vector-icons/AntDesign';
import {useTheme} from 'styled-components';

const CurrencyItem = ({onPress, selectedCurrency, currencySymbol}) => {
  const theme = useTheme();
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text h5 h5Style={{color: '#000'}}>
        {currencySymbol}
      </Text>
      {selectedCurrency === currencySymbol ? (
        <Icon size={20} name={'checkcircle'} color={theme.colors.grey5} />
      ) : null}
    </TouchableOpacity>
  );
};

export default CurrencyItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 10,
    justifyContent: 'space-between',
  },
});
