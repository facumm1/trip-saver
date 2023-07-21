import React, {useContext} from 'react';
import {StyleSheet, TextInput} from 'react-native';
import LoginDataContext from '../../context/LoginDataContext';
import {LoginValuesTypes, loginValues} from '../../util/AuthFormValues';

const LoginForm: React.FC = () => {
  const {errorMessage, credentials, handleErrorMsg, handleCredentials} =
    useContext(LoginDataContext);

  return (
    <>
      {loginValues.map(({inputName, placeholder}: LoginValuesTypes, index) => (
        <TextInput
          key={index}
          onFocus={() => errorMessage.length > 0 && handleErrorMsg('')}
          onChangeText={text => handleCredentials(inputName, text)}
          value={credentials[inputName]}
          style={styles.input}
          placeholder={placeholder}
        />
      ))}
    </>
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 0.7,
    borderRadius: 10,
    paddingLeft: 10,
    width: '100%',
    marginTop: 25,
  },
});

export default LoginForm;
