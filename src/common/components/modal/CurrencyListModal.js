import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {Header, SafeAreaView} from '@common/components';
import {connect, useDispatch} from 'react-redux';
import {FlatList} from 'react-native';
import CurrencyItem from './component/CurrencyItem';
import {changeCurrencyValue, downloadCurrencies} from '@redux/auth/actions';
import {currencyListSelector} from '../../../redux/auth/selectors';

const CurrencyListModal = ({route, currencyList}) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const from = route.params.from;
  const isFromBase = route.params.isFromBase;

  useEffect(() => {
    if (currencyList.isEmpty()) {
      dispatch(downloadCurrencies());
    }
  }, []);

  return (
    <SafeAreaView>
      <Header title={'Base  Currency'} />
      <FlatList
        data={currencyList?.toArray() ?? []}
        keyExtractor={item => `${item[0]}`}
        renderItem={({item, index}) => (
          <CurrencyItem
            onPress={() => {
              let key = 'baseCurrency';
              if (!isFromBase) {
                key = 'convertedCurrency';
              }
              dispatch(changeCurrencyValue({key: key, value: item[0]}));
              navigation.goBack();
            }}
            selectedCurrency={from}
            currencySymbol={item[0]}
          />
        )}
      />
    </SafeAreaView>
  );
};

const mapStateToProps = state => {
  return {
    currencyList: currencyListSelector(state),
  };
};

export default connect(mapStateToProps)(CurrencyListModal);
