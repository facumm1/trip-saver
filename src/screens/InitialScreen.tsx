import React from 'react';
import {StyleSheet, View} from 'react-native';

import {GetStartedView, AuthView} from '../views';
import {useToggle} from '../hooks';
import appColors from '../styles/appColors';

export type StartAppType = {
  handleStartApp: () => void;
};

const InitialScreen: React.FC = () => {
  const {open: startApp, handleOpen: handleStartApp} = useToggle();

  return (
    <View style={styles.container}>
      {!startApp ? (
        <GetStartedView handleStartApp={handleStartApp} />
      ) : (
        <AuthView />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: appColors.white,
  },
});

export default InitialScreen;
