import React from 'react';
import {StyleSheet, View} from 'react-native';
import {GetStartedBottom, GetStartedTop} from '../components/Containers';
import {StartAppType} from '../screens/InitialScreen';

const GetStartedView: React.FC<StartAppType> = ({handleStartApp}) => {
  return (
    <View style={styles.container}>
      <GetStartedTop />
      <GetStartedBottom handleStartApp={handleStartApp} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1},
});

export default GetStartedView;
