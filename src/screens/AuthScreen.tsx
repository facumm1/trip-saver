import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import appColors from '../styles/appColors';
import useToggle from '../hooks/useToggle';
import {LoginContainer, RegisterContainer} from '../components/Containers';
import GetStartedView from '../views/GetStartedView';

const AuthScreen: React.FC = () => {
  const {open: isRegisterActive, handleOpen: handleChangeForm} = useToggle();

  return (
    <View style={styles.container}>
      {/* <GetStartedView /> */}
      <View style={{...styles.header, flex: isRegisterActive ? 0.4 : 0.6}}>
        <Text style={styles.headerText}>Trip Saver</Text>
      </View>

      <View style={styles.contentContainer}>
        {!isRegisterActive ? (
          <LoginContainer handleChangeForm={handleChangeForm} />
        ) : (
          <RegisterContainer handleChangeForm={handleChangeForm} />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: appColors.white,
  },
  header: {
    backgroundColor: 'inherit',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    color: appColors.white,
    fontWeight: '600',
    fontSize: 35,
  },
  contentContainer: {
    backgroundColor: appColors.white,
    flex: 1,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    overflow: 'hidden',
  },
});

export default AuthScreen;
