import React, {useState} from 'react';
import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  StyleSheet,
} from 'react-native';
import GoogleButton from '../Buttons/GoogleButton';
import {handleChangeText, handleFocus} from '../../helpers/loginHandlers';
import AuthButton from '../Buttons/AuthButton';

const inputsData = [
  {inputName: 'email', placeholder: 'Email'},
  {inputName: 'password', placeholder: 'Contraseña'},
];

export const LoginForm = ({changeForm}) => {
  const [loginData, setLoginData] = useState({email: '', password: ''});
  const [errorMessage, setErrorMessage] = useState('');

  return (
    <>
      <View style={loginFormStyles.content}>
        <View style={loginFormStyles.formContainer}>
          <Text style={loginFormStyles.title}>Iniciar sesión</Text>

          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text style={loginFormStyles.subtitle}>¿No tenés una cuenta?</Text>
            <TouchableOpacity onPress={changeForm}>
              <Text style={{color: '#4245f5', fontWeight: 600, marginLeft: 5}}>
                Registrate ya!
              </Text>
            </TouchableOpacity>
          </View>

          {inputsData.map((data, index) => (
            <TextInput
              key={index}
              onFocus={() => {
                if (errorMessage.length > 0) {
                  handleFocus(setErrorMessage, loginData);
                }
              }}
              onChangeText={text =>
                handleChangeText(data.inputName, text, setLoginData)
              }
              value={loginData[data.inputName]}
              style={loginFormStyles.input}
              placeholder={data.placeholder}
            />
          ))}

          <Text style={{marginTop: 5, color: '#ff0008'}}>{errorMessage}</Text>

          <AuthButton setErrorMessage={setErrorMessage} data={loginData} />
        </View>

        <GoogleButton title="O ingresá también con " />
      </View>
    </>
  );
};

const loginFormStyles = StyleSheet.create({
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
});
