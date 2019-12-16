import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {loadHome} from './HomeActions';
type Props = {};

export class home extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View>
        <Text>hello from home</Text>
      </View>
    );
  }
}

function mapStateToProps(state) {
  const {isFetching, error, data, success, failure} = state.HomeReducer;
  return {
    isFetching,
    error,
    data,
    success,
    failure,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    loadHome: bindActionCreators(loadHome, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(home);
const styles = StyleSheet.create({
  container: {},
});
