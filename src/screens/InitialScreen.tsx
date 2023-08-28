import React from 'react';
import {View, StyleSheet} from 'react-native';
import appColors from '../styles/appColors';
import {GetStartedView, AuthView} from '../views';
import {useToggle} from '../hooks';

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
