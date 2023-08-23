import React from 'react';
import {StyleSheet, TextInput} from 'react-native';
import {Control, Controller} from 'react-hook-form';

import appColors from '../../styles/appColors';
import {emailRules, fullNameRules, passwordRules} from '../../util/FieldRules';

type FieldActiveTypes = {
  email: boolean;
  password: boolean;
  fullName: boolean;
};

type Props = {
  inputName: string;
  placeholder: string;
  hidePassword: boolean;
  fieldActive: FieldActiveTypes;
  control: Control<any>;
  handleActiveField: (inputName: string) => void;
};

const RegisterField: React.FC<Props> = ({
  inputName,
  placeholder,
  hidePassword,
  fieldActive,
  control,
  handleActiveField,
}) => {
  const isFieldActive = fieldActive[inputName as keyof FieldActiveTypes]
    ? appColors.darkBlue
    : appColors.gray;

  const fieldStyles = {
    ...styles.input,
    borderColor: isFieldActive,
  };

  const showPwdIcon =
    inputName === 'password' ? {secureTextEntry: hidePassword} : {};

  const handleFieldRules = () => {
    if (inputName === 'email') {
      return emailRules;
    } else if (inputName === 'password') {
      return passwordRules;
    } else {
      return fullNameRules;
    }
  };

  return (
    <Controller
      name={inputName}
      control={control}
      rules={handleFieldRules()}
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
