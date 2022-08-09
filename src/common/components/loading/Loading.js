import React, {Component} from 'react';
import {StyleSheet, Modal, View, ActivityIndicator} from 'react-native';
import {connect} from 'react-redux';
import {isLoadingSelector} from '@redux/auth/selectors';

class Loading extends Component {
  render() {
    const {isLoading} = this.props;
    return (
      <Modal animationType="none" transparent visible={isLoading}>
        <View style={[styles.viewLoading]}>
          <ActivityIndicator size="small" color={'black'} />
        </View>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  viewLoading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const mapStateToProps = state => {
  return {
    isLoading: isLoadingSelector(state),
  };
};

export default connect(mapStateToProps)(Loading);
