import React, {Fragment, useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {handleChangeText, handleFocus} from '../../helpers/loginHandlers';
import AuthButton from '../Buttons/AuthButton';

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

          {inputsData.map((data, index) => (
            <Fragment key={index}>
              <TextInput
                onFocus={() => handleFocus(setErrorMessage, true)}
                onChangeText={text =>
                  handleChangeText(data.inputName, text, setRegisterData)
                }
                value={registerData[data.inputName]}
                style={registerFormStyles.input}
                placeholder={data.placeholder}
              />
              <Text style={{color: '#ff0008'}}>
                {errorMessage && data.errorMsg}
              </Text>
            </Fragment>
          ))}

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
  input: {
    borderWidth: 0.8,
    borderRadius: 10,
    paddingLeft: 10,
    width: '100%',
    marginTop: 5,
  },
  backBtn: {
    marginTop: 10,
    alignSelf: 'center',
    paddingVertical: 2.5,
    paddingHorizontal: 15,
  },
});
