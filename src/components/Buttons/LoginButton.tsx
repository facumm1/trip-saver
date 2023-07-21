import React, {useContext} from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import auth from '@react-native-firebase/auth';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import buttonStyles from '../../styles/buttonStyle';
import {validateLoginData} from '../../helpers/loginHandlers';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LoginDataContext from '../../context/LoginDataContext';

const LoginButton: React.FC = () => {
  //TODO terminar refactor de este componente
  const navigation: NavigationProp<any, 'MainScreen'> = useNavigation();

  const {credentials, handleErrorMsg} = useContext(LoginDataContext);

  const login = async () => {
    if (!validateLoginData(credentials)) {
      console.log('NO se logro iniciar sesion');
      handleErrorMsg('Email o contraseña con pocos caracteres.');
      return;
    }

    const {email, password} = credentials;

    console.log('Se logro iniciar sesion con', email, password);

    try {
      await auth().signInWithEmailAndPassword(email, password);

      const user = auth().currentUser;
      const uuid = user?.uid;

      console.log('User account signed in. Storing personal data...');

      await AsyncStorage.setItem('fullName', user?.displayName || '');
      await AsyncStorage.setItem('id', uuid || '');

      //navigation.navigate('MainScreen');
    } catch (error: any) {
      if (
        error.code === 'auth/user-not-found' ||
        error.code === 'auth/wrong-password'
      ) {
        handleErrorMsg('El usuario no se encuentra registrado.');
        return;
      }

      console.warn('Error:', error.code);
    }
  };

  return (
    <TouchableOpacity
      onPress={login}
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
