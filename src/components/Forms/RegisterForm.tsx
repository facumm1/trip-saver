import React, {Fragment} from 'react';
import {StyleSheet, Text, TextInput} from 'react-native';
import {RegisterCredentialsTypes} from '../../hooks/useRegisterData';
import {registerValues} from '../../util/AuthFormValues';

type Props = {
  errorMessage: boolean;
  registerCred: RegisterCredentialsTypes;
  handleShowError: () => void;
  handleRegisterCred: (
    key: keyof RegisterCredentialsTypes,
    value: string,
  ) => void;
};

const RegisterForm: React.FC<Props> = ({
  errorMessage,
  registerCred,
  handleShowError,
  handleRegisterCred,
}) => {
  return (
    <>
      {registerValues.map(({inputName, errorMsg, placeholder}, index) => (
        <Fragment key={index}>
          <TextInput
            onFocus={() => errorMessage && handleShowError()}
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
