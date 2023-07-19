import React, {Dispatch} from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import buttonStyles from '../../styles/buttonStyle';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import {
  validateLoginData,
  validateRegisterData,
} from '../../helpers/loginHandlers';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {CredentialsTypes} from '../Forms/LoginContainer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {RegisterCredentialsTypes} from '../Forms/RegisterContainer';

type Props = {
  credentials: CredentialsTypes | RegisterCredentialsTypes;
  setErrorMessage: Dispatch<React.SetStateAction<string | boolean>>;
  registerBtn?: boolean;
};

const AuthButton: React.FC<Props> = ({
  credentials,
  setErrorMessage,
  registerBtn = false,
}) => {
  const navigation: NavigationProp<any, 'MainScreen'> = useNavigation();

  const login = async () => {
    if (!validateLoginData(credentials)) {
      console.log('NO se logro iniciar sesion');
      setErrorMessage('Email o contraseña con pocos caracteres.');
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

      navigation.navigate('MainScreen');
    } catch (error: any) {
      if (
        error.code === 'auth/user-not-found' ||
        error.code === 'auth/wrong-password'
      ) {
        setErrorMessage('El usuario no se encuentra registrado.');
        return;
      }

      console.warn('Error:', error.code);
    }
  };

  const register = async () => {
    if (!validateRegisterData(credentials)) {
      setErrorMessage(true);
      return;
    }

    const {fullName, email, password} = credentials;

    try {
      await auth().createUserWithEmailAndPassword(email, password);

      console.log('Registrando usuario!', fullName);

      const user = auth().currentUser;
      await user?.updateProfile({
        displayName: fullName,
      });
      await firestore()
        .collection('usuarios')
        .doc(user?.uid)
        .set({fullName, email, password});

      //login();
    } catch (error: any) {
      if (
        error.code === 'auth/email-already-in-use' ||
        error.code === 'auth/invalid-email'
      ) {
        console.log(error.code);
      }
      console.warn('Error:', error.code);
    }
  };

  /* React.useEffect(() => {
    login({email: 'facundomm1@gmail.com', password: '123456'}).then();
  }, []); */

  return (
    <TouchableOpacity
      onPress={() => (!registerBtn ? login() : register())}
      style={[buttonStyles.btn, styles.loginButton]}>
      <Text style={[buttonStyles.textBtn, styles.loginButtonText]}>
        {!registerBtn ? 'Iniciar sesión' : 'Registrarse'}
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

export default AuthButton;
