import React from 'react';
import {TextInput, Text, View, StyleSheet} from 'react-native';
import {useTheme} from 'styled-components';
import {error} from '../config/colors';

const Input = ({
  containerStyle,
  errorMessage,
  errorProps,
  errorStyle,
  ...attributes
}) => {
  const theme = useTheme();
  return (
    <View style={StyleSheet.flatten([styles.container, containerStyle])}>
      <View style={styles.inputContainer(theme)}>
        <TextInput
          placeholderTextColor={theme.colors.grey5}
          testID="RNE__Input__text-input"
          underlineColorAndroid="transparent"
          {...attributes}
          style={styles.input}
        />
      </View>
      {!!errorMessage && (
        <Text
          {...errorProps}
          style={StyleSheet.flatten([
            styles.error(theme),
            errorStyle && errorStyle,
          ])}>
          {errorMessage}
        </Text>
      )}
    </View>
  );
};
export default Input;

const styles = StyleSheet.create({
  inputContainer: theme => ({
    flexDirection: 'row',
    borderWidth: 1,
    width: '100%',
    alignItems: 'center',
    borderColor: theme.colors.grey3,
  }),
  container: {
    width: '100%',
    paddingHorizontal: 10,
  },
  error: {
    margin: 5,
    fontSize: 12,
    color: error,
  },
  input: {
    alignSelf: 'center',
    color: 'black',
    width: '100%',
    // fontSize: 18,
    flex: 1,
    // minHeight: 40,
  },
});
