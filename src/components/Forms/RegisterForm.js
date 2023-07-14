import React, {Fragment, useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import AuthButton from '../Buttons/AuthButton';
import RegisterInputs from '../Inputs/RegisterInputs';

export const RegisterForm = ({changeForm}) => {
  const [errorMessage, setErrorMessage] = useState(false);
  const [registerData, setRegisterData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  return (
    <>
      <View style={{...registerFormStyles.content}}>
        <View style={registerFormStyles.formContainer}>
          <Text style={registerFormStyles.title}>Registrarse</Text>
          <Text style={registerFormStyles.subtitle}>
            Completa los datos para continuar
          </Text>

          <RegisterInputs
            errorMessage={errorMessage}
            registerData={registerData}
            setErrorMessage={setErrorMessage}
            setRegisterData={setRegisterData}
          />

          <AuthButton
            setErrorMessage={setErrorMessage}
            data={registerData}
            registerBtn
          />

          <TouchableOpacity
            onPress={changeForm}
            style={registerFormStyles.backBtn}>
            <Text style={{textAlign: 'center'}}>Volver</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

const registerFormStyles = StyleSheet.create({
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
});
