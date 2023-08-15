import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import appColors from '../../styles/appColors';
import LoginForm from '../Forms/LoginForm';
import LoginDataProvider from '../../context/LoginDataProvider';
import LoginErrorMsg from '../Text/LoginErrorMsg';
import {ChangeFormButton, GoogleButton, LoginButton} from '../Buttons';

type Props = {
  handleChangeForm: () => void;
};

const LoginContainer: React.FC<Props> = ({handleChangeForm}) => {
  return (
    <>
      <View style={styles.content}>
        <View style={styles.formContainer}>
          {/* Form */}
          <LoginDataProvider>
            <LoginForm />

            <ChangeFormButton handleChangeForm={handleChangeForm} />

            <LoginErrorMsg />

            <LoginButton />
          </LoginDataProvider>

          <Text style={styles.optionText}>O también</Text>

          {/* Google OAuth */}
          <GoogleButton />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  content: {
    alignItems: 'center',
    backgroundColor: appColors.white,
  },
  formContainer: {
    width: '75%',
    marginTop: 30,
  },
  optionText: {
    textAlign: 'center',
    marginVertical: 15,
  },
});

export default LoginContainer;
