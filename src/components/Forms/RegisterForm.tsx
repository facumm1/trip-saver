import React, {Fragment, useContext} from 'react';
import {StyleSheet, Text, TextInput} from 'react-native';
import {RegisterCredentialsTypes} from '../../hooks/useRegisterData';
import {registerValues} from '../../util/AuthFormValues';
import RegisterDataContext from '../../context/RegisterDataContext';

const RegisterForm: React.FC = () => {
  const {showErrorMsg, registerCred, handleShowError, handleRegisterCred} =
    useContext(RegisterDataContext);

  //TODO cambiar key de fragment, revisar type de inputName
  return (
    <>
      {registerValues.map(({inputName, errorMsg, placeholder}, index) => (
        <Fragment key={index}>
          <TextInput
            onFocus={() => showErrorMsg && handleShowError()}
            onChangeText={text =>
              handleRegisterCred(
                inputName as keyof RegisterCredentialsTypes,
                text,
              )
            }
            value={registerCred[inputName as keyof RegisterCredentialsTypes]}
            style={styles.input}
            placeholder={placeholder}
          />
          <Text style={styles.errorMsg}>{showErrorMsg && errorMsg}</Text>
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
