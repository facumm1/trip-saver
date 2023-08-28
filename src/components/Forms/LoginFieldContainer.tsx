import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Control, FieldErrors} from 'react-hook-form';

import {LoginFieldName, LoginErrorMsg} from '../Text';
import LoginField from '../TextField/LoginField';

import {AuthFieldTypes, loginMock} from '../../util/AuthFieldMock';
import HidePasswordButton from '../Buttons/HidePasswordButton';
import {useFormField, useToggle} from '../../hooks';

type Props = {
  control: Control<any>;
  errors: FieldErrors;
};

const LoginFieldContainer: React.FC<Props> = ({control, errors}) => {
  const {open: hidePassword, handleOpen: handleHidePassword} = useToggle(true);
  const {fieldActive, handleActiveField} = useFormField();

  //TODO refactor
  return (
    <View>
      {loginMock.map((data: AuthFieldTypes) => (
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

            {data.inputName === 'password' && (
              <HidePasswordButton
                hidePassword={hidePassword}
                handleHidePassword={handleHidePassword}
              />
            )}
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
