import React, {useContext} from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import buttonStyles from '../../styles/buttonStyle';
import {validateLoginData} from '../../helpers/loginHandlers';
import LoginDataContext from '../../context/LoginDataContext';
import {userLogging} from '../../firebase/auth/auth';

const LoginButton: React.FC = () => {
  //TODO terminar refactor de este componente
  const {credentials, handleErrorMsg} = useContext(LoginDataContext);

  const handleLogin = async () => {
    if (!validateLoginData(credentials)) {
      handleErrorMsg('Email o contraseña con pocos caracteres.');
      return;
    }

    const {email, password} = credentials;

    console.log('Se logro iniciar sesion con', email, password);

    await userLogging(credentials);
  };

  return (
    <TouchableOpacity
      onPress={handleLogin}
      style={[buttonStyles.btn, styles.loginButton]}>
      <Text style={[buttonStyles.textBtn, styles.loginButtonText]}>
        Iniciar sesión
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  loginButton: {
    backgroundColor: '#000',
    marginTop: 12,
    width: '75%',
  },
  loginButtonText: {
    color: '#fff',
  },
});

export default LoginButton;
