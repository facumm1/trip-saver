import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import buttonStyles from '../../styles/buttonStyle';
import auth from '@react-native-firebase/auth';
import {
  validateLoginData,
  validateRegisterData,
} from '../../helpers/loginHandlers';

const AuthButton = ({setErrorMessage, data, registerBtn = false}) => {
  const authenticate = () => {
    if (!validateLoginData(data)) {
      setErrorMessage('Email o contraseña con pocos caracteres.');
      return;
    }

    const {email, password} = data;

    console.log(email, password);

    /* auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        console.log('User account signed in!');
      })
      .catch(error => {
        if (
          error.code === 'auth/user-not-found' ||
          error.code === 'auth/wrong-password'
        ) {
          setErrorMessage('El usuario no se encuentra registrado.');
          return;
        }
        console.log('Error:', error.code);
      }); */
  };

  const register = () => {
    if (!validateRegisterData(data)) {
      setErrorMessage(true);
      return;
    }

    const {fullName, email, password, confirmPassword} = data;

    console.log('User registering!', fullName);

    /* auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        console.log('User account signed in!');
      })
      .catch(error => {
        if (
          error.code === 'auth/email-already-in-use' ||
          error.code === 'auth/invalid-email'
        ) {
          console.log(error.code);
        }
        console.log('Error:', error.code);
      }); */
  };

  return (
    <TouchableOpacity
      onPress={() => (!registerBtn ? authenticate(data) : register(data))}
      style={[buttonStyles.btn, authBtnstyles.loginButton]}>
      <Text style={[buttonStyles.textBtn, authBtnstyles.loginButtonText]}>
        {!registerBtn ? 'Iniciar sesión' : 'Registrarse'}
      </Text>
    </TouchableOpacity>
  );
};

export default AuthButton;

const authBtnstyles = StyleSheet.create({
  loginButton: {
    backgroundColor: '#000',
    marginTop: 12,
    width: '75%',
  },
  loginButtonText: {
    color: '#fff',
  },
});
