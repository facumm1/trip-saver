import React, {useState} from 'react';
import {Text, TouchableOpacity, View, StyleSheet} from 'react-native';
import GoogleButton from '../Buttons/GoogleButton';
import AuthButton from '../Buttons/AuthButton';
import LoginInputs from '../Inputs/LoginInputs';

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

          <LoginInputs
            errorMessage={errorMessage}
            loginData={loginData}
            setErrorMessage={setErrorMessage}
            setLoginData={setLoginData}
          />

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
});
