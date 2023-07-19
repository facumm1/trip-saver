import React, {SetStateAction} from 'react';
import {StyleSheet, TextInput} from 'react-native';
import {CredentialsTypes} from '../Forms/LoginContainer';

type InputsDataTypes = {
  inputName: string;
  placeholder: string;
};

type Props = {
  errorMessage: string;
  credentials: CredentialsTypes;
  setErrorMessage: React.Dispatch<SetStateAction<string>>;
  setCredentials: React.Dispatch<SetStateAction<CredentialsTypes>>;
};

const inputsData: InputsDataTypes[] = [
  {inputName: 'email', placeholder: 'Email'},
  {inputName: 'password', placeholder: 'Contraseña'},
];

const handleFocus = (
  setState: React.Dispatch<SetStateAction<string>>,
): void => {
  setState('');
};

const handleChangeText = (
  key: string,
  value: string,
  setState: React.Dispatch<SetStateAction<CredentialsTypes>>,
): void => {
  setState(data => ({
    ...data,
    [key]: value,
  }));
};

const LoginForm: React.FC<Props> = ({
  errorMessage,
  credentials,
  setErrorMessage,
  setCredentials,
}) => {
  return (
    <>
      {inputsData.map(
        (
          {inputName, placeholder}: {inputName: string; placeholder: string},
          index,
        ) => (
          <TextInput
            key={index}
            onFocus={() =>
              errorMessage.length > 0 && handleFocus(setErrorMessage)
            }
            onChangeText={text =>
              handleChangeText(inputName, text, setCredentials)
            }
            value={credentials[inputName as keyof CredentialsTypes]}
            style={styles.input}
            placeholder={placeholder}
          />
        ),
      )}
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
