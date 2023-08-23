import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Control, FieldErrors} from 'react-hook-form';

import {LoginFieldName, LoginErrorMsg} from '../Text';
import LoginField from '../TextField/LoginField';

import {AuthFormTypes, loginValues} from '../../util/AuthFormValues';
import HidePasswordButton from '../Buttons/HidePasswordButton';
import {useFormField, useToggle} from '../../hooks';

type Props = {
  control: Control<any>;
  errors: FieldErrors;
};

const hidePwdBtn = (handleHidePassword: () => void): JSX.Element => (
  <HidePasswordButton handleHidePassword={handleHidePassword} />
);

const LoginFieldContainer: React.FC<Props> = ({control, errors}) => {
  const {open: hidePassword, handleOpen: handleHidePassword} = useToggle(true);
  const {fieldActive, handleActiveField} = useFormField();

  //TODO refactor
  return (
    <View>
      {loginValues.map((data: AuthFormTypes) => (
        <View key={data.inputName} style={styles.fieldContainer}>
          <LoginFieldName inputText={data.inputText} />

          <View>
            <LoginField
              inputName={data.inputName}
              placeholder={data.placeholder}
              control={control}
              hidePassword={hidePassword}
              fieldActive={fieldActive}
              handleActiveField={handleActiveField}
            />

            {data.inputName === 'password' && hidePwdBtn(handleHidePassword)}
          </View>

          <LoginErrorMsg inputName={data.inputName} errors={errors} />
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  fieldContainer: {marginBottom: 10},
});

export default LoginFieldContainer;
