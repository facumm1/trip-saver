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
          {/* Title */}
          <Text style={styles.title}>Iniciar sesión</Text>
          <ChangeFormButton handleChangeForm={handleChangeForm} />

          {/* Form */}
          <LoginDataProvider>
            <LoginForm />

            <LoginErrorMsg />

            <LoginButton />
          </LoginDataProvider>

          {/* Google OAuth */}
          <GoogleButton title="O ingresá también con" />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  content: {
    alignItems: 'center',
    backgroundColor: appColors.white,
    flex: 1,
  },
  formContainer: {
    width: '75%',
    marginTop: 30,
  },
  title: {
    fontSize: 22.5,
  },
});

export default LoginContainer;
