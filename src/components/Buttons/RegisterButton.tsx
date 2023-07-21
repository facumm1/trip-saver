import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import buttonStyles from '../../styles/buttonStyle';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import {validateRegisterData} from '../../helpers/loginHandlers';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {RegisterCredentialsTypes} from '../Containers/RegisterContainer';

type Props = {
  handleShowError: () => void;
  credentials: RegisterCredentialsTypes;
};

const RegisterButton: React.FC<Props> = ({credentials, handleShowError}) => {
  const navigation: NavigationProp<any, 'MainScreen'> = useNavigation();

  const register = async () => {
    if (!validateRegisterData(credentials)) {
      handleShowError();
      return;
    }

    const {fullName, email, password} = credentials;

    try {
      await auth().createUserWithEmailAndPassword(email, password);

      console.log('Registrando usuario!', fullName, email, password);

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

  return (
    <TouchableOpacity
      onPress={register}
      style={[buttonStyles.btn, styles.loginButton]}>
      <Text style={[buttonStyles.textBtn, styles.loginButtonText]}>
        Registrarse
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

export default RegisterButton;
