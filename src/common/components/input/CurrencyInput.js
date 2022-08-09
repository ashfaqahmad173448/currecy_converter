import React from 'react';
import {TextInput, View, StyleSheet} from 'react-native';
import {useTheme} from 'styled-components';
import {Text} from '@common/components';

const CurrencyInput = ({currency, containerStyle, ...attributes}) => {
  const theme = useTheme();
  return (
    <View style={StyleSheet.flatten([styles.container, containerStyle])}>
      <View style={styles.currencyContainer}>
        <Text h5 h5Style={{color: theme.colors.text}}>
          {currency}
        </Text>
      </View>
      <View style={styles.inputContainer(theme)}>
        <TextInput
          keyboardType={'numeric'}
          placeholderTextColor={theme.colors.grey5}
          underlineColorAndroid="transparent"
          {...attributes}
          style={styles.input(theme)}
        />
      </View>
    </View>
  );
};
export default CurrencyInput;

const styles = StyleSheet.create({
  currencyContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    minWidth: 70,
  },
  inputContainer: theme => ({
    flexDirection: 'row',
    borderWidth: 1,
    width: '100%',
    paddingHorizontal: 20,
    alignItems: 'center',
    borderColor: theme.colors.grey3,
  }),
  container: {
    flexDirection: 'row',
    backgroundColor: '#fff',
  },
  input: theme => ({
    alignSelf: 'center',
    // fontSize: 18,
    color: '#000',
    flex: 1,
    // minHeight: 40,
  }),
});
