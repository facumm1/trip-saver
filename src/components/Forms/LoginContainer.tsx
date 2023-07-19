import React, {useState} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import GoogleButton from '../Buttons/GoogleButton';
import AuthButton from '../Buttons/AuthButton';
import ChangeFormButton from '../Buttons/ChangeFormButton';
import appColors from '../../styles/appColors';
import LoginForm from '../Inputs/LoginForm';

type Props = {
  handleChangeForm: () => void;
};

export type CredentialsTypes = {
  email: string;
  password: string;
};

const LoginContainer: React.FC<Props> = ({handleChangeForm}) => {
  const [credentials, setCredentials] = useState<CredentialsTypes>({
    email: '',
    password: '',
  });
  const [errorMessage, setErrorMessage] = useState<string>('');

  return (
    <>
      <View style={styles.content}>
        <View style={styles.formContainer}>
          {/* Title */}
          <Text style={styles.title}>Iniciar sesión</Text>

          {/* Change to RegisterForm */}
          <ChangeFormButton handleChangeForm={handleChangeForm} />

          {/* Login Form */}
          <LoginForm
            errorMessage={errorMessage}
            credentials={credentials}
            setCredentials={setCredentials}
            setErrorMessage={setErrorMessage}
          />

          {/* Error message */}
          <Text style={styles.loginErrorMsg}>{errorMessage}</Text>

          {/* Authenticate buttons */}
          <AuthButton
            setErrorMessage={setErrorMessage}
            credentials={credentials}
          />

          <GoogleButton title="O ingresá también con " />
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
  loginErrorMsg: {marginTop: 5, color: '#ff0008'},
});

export default LoginContainer;
