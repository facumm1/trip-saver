import React from 'react';
import {View} from 'react-native';
import {Control, FieldErrors} from 'react-hook-form';

import {LoginErrorMsg, LoginFieldName} from '../Text';
import RegisterField from '../TextField/RegisterField';

import {RegisterTypes, registerValues} from '../../util/AuthFormValues';
import HidePasswordButton from '../Buttons/HidePasswordButton';
import {useFormField, useToggle} from '../../hooks';

type Props = {
  control: Control<any>;
  errors: FieldErrors;
};

const hidePwdBtn = (handleHidePassword: () => void): JSX.Element => (
  <HidePasswordButton handleHidePassword={handleHidePassword} />
);

const RegisterFieldContainer: React.FC<Props> = ({control, errors}) => {
  const {open: hidePassword, handleOpen: handleHidePassword} = useToggle(true);
  const {fieldActive, handleActiveField} = useFormField();

  return (
    <View>
      {registerValues.map((data: RegisterTypes) => (
        <View key={data.inputName}>
          <LoginFieldName inputText={data.inputText} />

          <View>
            <RegisterField
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

export default RegisterFieldContainer;
