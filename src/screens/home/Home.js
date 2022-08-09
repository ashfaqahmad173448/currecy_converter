import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {CurrencyInput, SafeAreaView, Text} from '@common/components';
import {SettingIcon} from '@common/components/icon';
import NavigationService from '@utils/navigation';
import {mainStack} from '@config/navigator';
import {useDispatch} from 'react-redux';
import {currencyConverter, downloadCurrencies} from '../../redux/auth/actions';

const Home = () => {
  const dispatch = useDispatch();
  const [baseCurrencyValue, setBaseCurecncy] = useState('');
  const [targetCurrencyValue, setTargetCurrencyValue] = useState('');

  useEffect(() => {
    if (dispatch) {
      dispatch(downloadCurrencies());
      currencyConverterAction();
    }
  }, [dispatch]);

  const openSettings = () => {
    NavigationService.navigate(mainStack.settingMain);
  };

  const currencyConverterAction = () => {
    dispatch(
      currencyConverter({from: 'USD', to: 'PKR', amount: 1}, result => {
        alert(JSON.stringify(result));
      }),
    );
  };

  return (
    <SafeAreaView>
      <View style={styles.mainContaier}>
        <View style={styles.iconContainer}>
          <SettingIcon onPress={openSettings} />
        </View>
        <View style={styles.container}>
          <Text h3 h3Style={{color: '#fff'}} medium>
            Currency Converter
          </Text>
          <CurrencyInput
            currency={'USD'}
            containerStyle={styles.marginTop}
            placeholder={'Amount'}
            value={baseCurrencyValue}
            onChangeText={text => {
              setBaseCurecncy(text);
            }}
          />
          <CurrencyInput
            currency={'PKR'}
            containerStyle={styles.marginTop}
            placeholder={'Amount'}
            value={targetCurrencyValue}
            onChangeText={text => {
              setTargetCurrencyValue(text);
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  mainContaier: {
    backgroundColor: '#5c60cd',
    flex: 1,
  },
  iconContainer: {
    alignItems: 'flex-end',
    margin: 20,
    position: 'absolute',
    right: 10,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 50,
  },
  marginTop: {
    marginTop: 20,
  },
});
