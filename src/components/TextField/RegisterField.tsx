import React from 'react';
import {StyleSheet} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import {RegisterCredentialsTypes} from '../../hooks/useRegisterData';
import appColors from '../../styles/appColors';

export type FieldActiveTypes = {
  email: boolean;
  password: boolean;
};

type Props = {
  inputName: string;
  registerCred: RegisterCredentialsTypes;
  placeholder: string;
  hidePassword: boolean;
  fieldActive: FieldActiveTypes;
  handleActiveField: (inputName: string) => void;
  handleRegisterCred: (
    key: keyof RegisterCredentialsTypes,
    value: string,
  ) => void;
};

const RegisterField: React.FC<Props> = ({
  inputName,
  registerCred,
  placeholder,
  hidePassword,
  fieldActive,
  handleRegisterCred,
  handleActiveField,
}) => {
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
    //showErrorMsg && handleShowError();
  };

  const handleOnBlur = () => {
    handleActiveField(inputName);
  };

  const handleOnChangeText = (text: string) =>
    handleRegisterCred(inputName as keyof RegisterCredentialsTypes, text);

  return (
    <TextInput
      onFocus={handleOnFocus}
      onBlur={handleOnBlur}
      onChangeText={handleOnChangeText}
      value={registerCred[inputName as keyof RegisterCredentialsTypes]}
      style={fieldStyles}
      placeholder={placeholder}
      {...showPwdIcon}
    />
  );
};

const styles = StyleSheet.create({
  title: {
    color: appColors.darkBlue,
    fontWeight: '500',
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderRadius: 50,
    color: appColors.darkBlue,
    paddingLeft: 17.5,
    width: '100%',
    marginTop: 0,
  },
  backBtn: {
    marginTop: 10,
    alignSelf: 'center',
    paddingVertical: 2.5,
    paddingHorizontal: 15,
  },
  errorMsg: {color: '#ff0008'},
});

export default RegisterField;
