import React from 'react';
import {StyleSheet, TextInput} from 'react-native';
import {handleChangeText, handleFocus} from '../../helpers/loginHandlers';

const inputsData = [
  {inputName: 'email', placeholder: 'Email'},
  {inputName: 'password', placeholder: 'Contraseña'},
];

const LoginInputs = ({
  errorMessage,
  loginData,
  setErrorMessage,
  setLoginData,
}) => {
  return (
    <>
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
          style={loginInputsStyles.input}
          placeholder={data.placeholder}
        />
      ))}
    </>
  );
};

export default LoginInputs;

const loginInputsStyles = StyleSheet.create({
  input: {
    borderWidth: 0.7,
    borderRadius: 10,
    paddingLeft: 10,
    width: '100%',
    marginTop: 25,
  },
});
