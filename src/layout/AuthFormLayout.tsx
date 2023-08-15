import React from 'react';
import {StyleSheet, View} from 'react-native';
import appColors from '../styles/appColors';
import {LoginContainer, RegisterContainer} from '../components/Containers';

type Props = {
  showRegister: boolean;
  handleChangeForm: () => void;
};

const AuthFormLayout: React.FC<Props> = ({showRegister, handleChangeForm}) => {
  return (
    <View style={styles.contentContainer}>
      {!showRegister ? (
        <LoginContainer handleChangeForm={handleChangeForm} />
      ) : (
        <RegisterContainer handleChangeForm={handleChangeForm} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    backgroundColor: appColors.white,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    overflow: 'hidden',
  },
});

export default AuthFormLayout;
