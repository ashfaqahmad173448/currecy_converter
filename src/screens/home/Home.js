import React, {useEffect, useState} from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import {CurrencyInput, SafeAreaView, Text} from '@common/components';
import {SettingIcon} from '@common/components/icon';
import NavigationService from '@utils/navigation';
import {mainStack} from '@config/navigator';
import {connect, useDispatch} from 'react-redux';
import moment from 'moment';

import {
  changeCurrencyValue,
  currencyConverter,
  reverseCurrency,
} from '../../redux/auth/actions';
import ReverseCurrencyIcon from '../../common/components/icon/ReverseCurrencyIcon';
import {
  getBaseCurrencyAmountSelector,
  getBaseCurrencySelector,
  getConvertedCurrencyAmountSelector,
  getConvertedCurrencySelector,
} from '@redux/auth/selectors';
import {getConvertedDatetSelector} from '../../redux/auth/selectors';

const Home = ({from, to, fromAmount, toAmount, convertedDate}) => {
  const dispatch = useDispatch();
  const openSettings = () => {
    NavigationService.navigate(mainStack.settingMain);
  };

  const onReverseCurency = () => {
    dispatch(reverseCurrency());
  };

  useEffect(() => {
    dispatch(currencyConverter({from: from, to: to, amount: fromAmount}));
  }, [fromAmount, from, to, dispatch]);

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
            openCurrencyList={() => {
              NavigationService.navigate(mainStack.currencyModal, {
                from: from,
                isFromBase: true,
              });
            }}
            currency={from}
            containerStyle={styles.marginTop}
            placeholder={'Amount'}
            value={fromAmount.toString()}
            onChangeText={text => {
              dispatch(
                changeCurrencyValue({key: 'baseCurrencyAmount', value: text}),
              );
            }}
          />
          <CurrencyInput
            openCurrencyList={() => {
              NavigationService.navigate(mainStack.currencyModal, {
                from: to,
                isFromBase: false,
              });
            }}
            disabled={true}
            currency={to}
            editable={false}
            containerStyle={styles.marginTop}
            placeholder={'Amount'}
            value={toAmount.toString()}
          />
          <Text
            h6
            light
            h6Style={{
              color: '#fff',
              marginTop: 10,
            }}>{`${fromAmount} ${from} = ${toAmount} ${to}  as of ${moment(
            convertedDate,
          ).format('DD MMM YYYY')}`}</Text>
          <TouchableOpacity onPress={onReverseCurency} style={styles.flexRow}>
            <ReverseCurrencyIcon />
            <Text h6 h6Style={{color: '#fff', marginTop: 10}}>
              Reverse Currency
            </Text>
          </TouchableOpacity>
          <View />
        </View>
      </View>
    </SafeAreaView>
  );
};

const mapStateToProps = state => {
  return {
    from: getBaseCurrencySelector(state),
    to: getConvertedCurrencySelector(state),
    fromAmount: getBaseCurrencyAmountSelector(state),
    toAmount: getConvertedCurrencyAmountSelector(state),
    convertedDate: getConvertedDatetSelector(state),
  };
};

export default connect(mapStateToProps)(Home);

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
  flexRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
