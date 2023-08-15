import React from 'react';
import {View, StyleSheet} from 'react-native';
import appColors from '../styles/appColors';
import {GetStartedView, AuthView} from '../views';

export type StartAppType = {
  handleStartApp: () => void;
};

const InitialScreen: React.FC = () => {
  const [startApp, setStartApp] = React.useState<boolean>(false);

  const handleStartApp = (): void => {
    setStartApp(!startApp);
  };

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
