import React from 'react';
import {StyleSheet, Text, TouchableOpacity, AsyncStorage} from 'react-native';
import buttonStyles from '../../styles/buttonStyle';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import {
  validateLoginData,
  validateRegisterData,
} from '../../helpers/loginHandlers';
import {useNavigation} from '@react-navigation/native';

const AuthButton = ({setErrorMessage, /* data, */ registerBtn = false}) => {
  const navigation = useNavigation();

  const login = async data => {
    if (!validateLoginData(data)) {
      setErrorMessage('Email o contraseña con pocos caracteres.');
      return;
    }

    const {email, password} = data;

    console.log(email, password);

    auth()
      .signInWithEmailAndPassword(email, password)
      .then(async () => {
        const user = auth().currentUser;
        const uuid = user.uid;
        console.log('User account signed in. Storing personal data...');

        try {
          await AsyncStorage.setItem('fullName', user.displayName);
          await AsyncStorage.setItem('id', uuid);
        } catch (err) {
          console.log(err);
        }

        navigation.navigate('MainScreen');
      })
      .catch(error => {
        if (
          error.code === 'auth/user-not-found' ||
          error.code === 'auth/wrong-password'
        ) {
          setErrorMessage('El usuario no se encuentra registrado.');
          return;
        }
        console.warn('Error:', error.code);
      });
  };

  const register = () => {
    if (!validateRegisterData(data)) {
      setErrorMessage(true);
      return;
    }

    const {fullName, email, password} = data;

    console.log('User registering!', fullName);

    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(async () => {
        console.log('User account registered!');
        const user = auth().currentUser;
        await user.updateProfile({
          displayName: fullName,
        });
        await firestore()
          .collection('usuarios')
          .doc(user.uid)
          .set({fullName, email, password});
        login();
      })
      .catch(error => {
        if (
          error.code === 'auth/email-already-in-use' ||
          error.code === 'auth/invalid-email'
        ) {
          console.log(error.code);
        }
        console.warn('Error:', error.code);
      });
  };

  React.useEffect(
    () => login({email: 'facundomm1@gmail.com', password: '123456'}),
    [],
  );

  return (
    <TouchableOpacity
      onPress={() => (!registerBtn ? login(data) : register(data))}
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
