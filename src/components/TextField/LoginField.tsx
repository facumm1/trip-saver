import React from 'react';
import {StyleSheet, TextInput} from 'react-native';
import {CredentialsTypes} from '../../hooks/useLoginData';
import appColors from '../../styles/appColors';
import {FieldActiveTypes} from '../Forms/LoginForm';

type Props = {
  inputName: string;
  credentials: CredentialsTypes;
  placeholder: string;
  hidePassword: boolean;
  fieldActive: FieldActiveTypes;
  handleActiveField: (inputName: string) => void;
  handleCredentials: (key: keyof CredentialsTypes, value: string) => void;
};

const LoginField: React.FC<Props> = ({
  inputName,
  credentials,
  placeholder,
  hidePassword,
  fieldActive,
  handleActiveField,
  handleCredentials,
}) => {
  //TODO refactor props
  const isFieldActive = fieldActive[inputName as keyof FieldActiveTypes]
    ? appColors.darkBlue
    : appColors.gray;

  const showPwdIcon =
    inputName === 'password' ? {secureTextEntry: hidePassword} : {};

  const fieldStyles = {
    ...styles.input,
    borderColor: isFieldActive,
  };

  const handleOnFocus = () => {
    handleActiveField(inputName);
    //errorMessage.length > 0 && handleErrorMsg('');
  };

  const handleOnBlur = () => {
    handleActiveField(inputName);
  };

  const handleOnChangeText = (text: string) =>
    handleCredentials(inputName as keyof CredentialsTypes, text);

  return (
    <TextInput
      onFocus={handleOnFocus}
      onBlur={handleOnBlur}
      onChangeText={handleOnChangeText}
      value={credentials[inputName as keyof CredentialsTypes]}
      style={fieldStyles}
      placeholder={placeholder}
      {...showPwdIcon}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderRadius: 50,
    color: appColors.darkBlue,
    paddingLeft: 17.5,
    width: '100%',
    marginTop: 0,
  },
});

export default LoginField;
