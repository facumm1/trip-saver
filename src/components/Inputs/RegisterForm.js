import React, {Fragment, useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import buttonStyles from '../../styles/buttonStyle';
import GoogleButton from '../Buttons/GoogleButton';
import {
  handleChangeText,
  handleFocus,
  validateRegisterData,
} from '../../helpers/loginHandlers';

const inputsData = [
  {
    inputName: 'fullName',
    placeholder: 'Nombre completo',
    errorMsg: 'El nombre debe contener mínimo 2 letras.',
  },
  {
    inputName: 'email',
    placeholder: 'Email',
    errorMsg: 'El email debe tener al menos una arroba.',
  },
  {
    inputName: 'password',
    placeholder: 'Contraseña',
    errorMsg: 'La contraseña debe tener mínimo 6 letras.',
  },
  {
    inputName: 'confirmPassword',
    placeholder: 'Confirmar contraseña',
    errorMsg: 'Las contraseñas deben coincidir.',
  },
];

export const RegisterForm = () => {
  const [invalidData, setInvalidData] = useState(false);
  const [registerData, setRegisterData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const register = () => {
    if (!validateRegisterData(registerData)) {
      setInvalidData(true);
      return;
    }

    console.log('User registering!');

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
    <>
      <View style={{...styles.content}}>
        <View style={styles.formContainer}>
          <Text style={styles.title}>Registrarse</Text>
          <Text style={styles.subtitle}>Completa los datos para continuar</Text>

          {inputsData.map((data, index) => (
            <Fragment key={index}>
              <TextInput
                onFocus={() => handleFocus(setInvalidData, true)}
                onChangeText={text =>
                  handleChangeText(data.inputName, text, setRegisterData)
                }
                value={registerData[data.inputName]}
                style={styles.input}
                placeholder={data.placeholder}
              />
              <Text style={{color: '#ff0008'}}>
                {invalidData && data.errorMsg}
              </Text>
            </Fragment>
          ))}

          <TouchableOpacity
            onPress={() => register(registerData)}
            style={[buttonStyles.btn, styles.loginButton]}>
            <Text style={[buttonStyles.textBtn, styles.loginButtonText]}>
              Registrarse
            </Text>
          </TouchableOpacity>
        </View>

        <GoogleButton title="O registrate tambien con" />
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
    marginBottom: 10,
  },
  input: {
    borderWidth: 0.8,
    borderRadius: 10,
    paddingLeft: 10,
    width: '100%',
    marginTop: 5,
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
