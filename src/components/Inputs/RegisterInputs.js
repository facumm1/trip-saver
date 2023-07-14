import React, {Fragment} from 'react';
import {StyleSheet, Text, TextInput} from 'react-native';
import {handleChangeText, handleFocus} from '../../helpers/loginHandlers';

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

export const RegisterInputs = ({
  errorMessage,
  registerData,
  setErrorMessage,
  setRegisterData,
}) => {
  return (
    <>
      {inputsData.map((data, index) => (
        <Fragment key={index}>
          <TextInput
            onFocus={() => handleFocus(setErrorMessage, true)}
            onChangeText={text =>
              handleChangeText(data.inputName, text, setRegisterData)
            }
            value={registerData[data.inputName]}
            style={registerInputsStyles.input}
            placeholder={data.placeholder}
          />
          <Text style={{color: '#ff0008'}}>
            {errorMessage && data.errorMsg}
          </Text>
        </Fragment>
      ))}
    </>
  );
};

export default RegisterInputs;

const registerInputsStyles = StyleSheet.create({
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
