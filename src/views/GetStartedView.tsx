import React from 'react';
import {StyleSheet, View} from 'react-native';
import {GetStartedBottom, GetStartedTop} from '../components/Containers';

const GetStartedView: React.FC = () => {
  return (
    <View style={styles.container}>
      <GetStartedTop />
      <GetStartedBottom />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1},
});

export default GetStartedView;
