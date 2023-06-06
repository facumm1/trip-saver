import React, {useState} from 'react';
import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  StyleSheet,
} from 'react-native';
import buttonStyles from '../../styles/buttonStyle';
import auth from '@react-native-firebase/auth';
import GoogleButton from '../Buttons/GoogleButton';
import {
  handleChangeText,
  handleFocus,
  validateLoginData,
} from '../../helpers/loginHandlers';

const inputsData = [
  {inputName: 'email', placeholder: 'Email'},
  {inputName: 'password', placeholder: 'Contraseña'},
];

export const LoginForm = ({setRegisterForm}) => {
  const [loginData, setLoginData] = useState({email: '', password: ''});
  const [wrongCredentials, setWrongCredentials] = useState('');

  const authenticate = ({email, password}) => {
    if (!validateLoginData()) {
      setWrongCredentials('Email o contraseña con pocos caracteres.');
      return;
    }

    auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        console.log('User account signed in!');
      })
      .catch(error => {
        if (
          error.code === 'auth/user-not-found' ||
          error.code === 'auth/wrong-password'
        ) {
          console.log('Error:', error.code);

          setWrongCredentials('El usuario no se encuentra registrado.');
        }

        /* if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        } */
      });
  };

  return (
    <>
      <View style={styles.content}>
        <View style={styles.formContainer}>
          <Text style={styles.title}>Iniciar sesión</Text>

          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text style={styles.subtitle}>¿No tenés una cuenta?</Text>
            <TouchableOpacity onPress={() => setRegisterForm(true)}>
              <Text style={{color: '#4245f5', fontWeight: 600, marginLeft: 5}}>
                Registrate ya!
              </Text>
            </TouchableOpacity>
          </View>

          {inputsData.map((data, index) => (
            <TextInput
              key={index}
              onFocus={() => {
                if (wrongCredentials.length > 0) {
                  handleFocus(setWrongCredentials);
                }
              }}
              onChangeText={text =>
                handleChangeText(data.inputName, text, setLoginData)
              }
              value={loginData[data.inputName]}
              style={styles.input}
              placeholder={data.placeholder}
            />
          ))}

          <Text style={{marginTop: 5, color: '#ff0008'}}>
            {wrongCredentials}
          </Text>

          <TouchableOpacity
            onPress={() => authenticate(loginData)}
            style={[buttonStyles.btn, styles.loginButton]}>
            <Text style={[buttonStyles.textBtn, styles.loginButtonText]}>
              Iniciar sesión
            </Text>
          </TouchableOpacity>
        </View>

        <GoogleButton title="O ingresá también con " />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  content: {
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  formContainer: {
    width: '75%',
    marginTop: 30,
  },
  title: {
    fontSize: 22.5,
  },
  subtitle: {
    fontSize: 17,
    marginVertical: 2.5,
  },
  input: {
    borderWidth: 0.7,
    borderRadius: 10,
    paddingLeft: 10,
    width: '100%',
    marginTop: 25,
  },
  loginButton: {
    backgroundColor: '#000',
    marginTop: 12,
    width: '75%',
  },
  loginButtonText: {
    color: '#fff',
  },
  socialContainer: {
    alignItems: 'center',
    marginTop: 15,
    width: '75%',
  },
  socialText: {
    fontSize: 17,
  },
  socialButton: {
    borderWidth: 0.7,
    paddingHorizontal: 25,
    paddingVertical: 5,
    marginTop: 7.5,
    borderRadius: 30,
  },
  socialButtonText: {
    fontSize: 20,
  },
});
