import React from 'react';
import {StyleSheet, TextInput} from 'react-native';
import appColors from '../../styles/appColors';
import {Control, Controller} from 'react-hook-form';
import {emailRules, passwordRules} from '../../util/FieldRules';

type FieldActiveTypes = {
  email: boolean;
  password: boolean;
};

type Props = {
  inputName: string;
  placeholder: string;
  hidePassword: boolean;
  fieldActive: FieldActiveTypes;
  control: Control<any>;
  handleActiveField: (inputName: string) => void;
};

const LoginField: React.FC<Props> = ({
  inputName,
  placeholder,
  hidePassword,
  fieldActive,
  control,
  handleActiveField,
}) => {
  //TODO refactor & make presentational component here

  const isFieldActive = fieldActive[inputName as keyof FieldActiveTypes]
    ? appColors.darkBlue
    : appColors.gray;

  const fieldStyles = {
    ...styles.input,
    borderColor: isFieldActive,
  };

  const showPwdIcon =
    inputName === 'password' ? {secureTextEntry: hidePassword} : {};

  return (
    <Controller
      name={inputName}
      control={control}
      rules={inputName === 'email' ? emailRules : passwordRules}
      render={({field: {onChange, onBlur, value}}) => (
        <TextInput
          onFocus={() => handleActiveField(inputName)}
          onBlur={() => {
            onBlur();
            handleActiveField(inputName);
          }}
          onChangeText={onChange}
          value={value}
          style={fieldStyles}
          placeholder={placeholder}
          {...showPwdIcon}
        />
      )}
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
