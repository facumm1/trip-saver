import React, {Fragment} from 'react';
import {StyleSheet, Text, TextInput} from 'react-native';
import {RegisterCredentialsTypes} from '../Containers/RegisterContainer';

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

type Props = {
  errorMessage: boolean;
  registerCred: RegisterCredentialsTypes;
  handleShowError: () => void;
  handleRegisterCred: (key: string, value: string) => void;
};

const RegisterForm: React.FC<Props> = ({
  errorMessage,
  registerCred,
  handleShowError,
  handleRegisterCred,
}) => {
  return (
    <>
      {inputsData.map(({inputName, errorMsg, placeholder}, index) => (
        <Fragment key={index}>
          <TextInput
            onFocus={() => errorMessage && handleShowError()}
            onChangeText={text => handleRegisterCred(inputName, text)}
            value={registerCred[inputName as keyof RegisterCredentialsTypes]}
            style={styles.input}
            placeholder={placeholder}
          />
          <Text style={styles.errorMsg}>{errorMessage && errorMsg}</Text>
        </Fragment>
      ))}
    </>
  );
};

const styles = StyleSheet.create({
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
  errorMsg: {color: '#ff0008'},
});

export default RegisterForm;
