import React from 'react';
import {View} from 'react-native';
import {Control, FieldErrors} from 'react-hook-form';

import {LoginErrorMsg, LoginFieldName} from '../Text';
import RegisterField from '../TextField/RegisterField';

import {RegisterFieldTypes, registerMock} from '../../util/AuthFieldMock';
import HidePasswordButton from '../Buttons/HidePasswordButton';
import {useFormField, useToggle} from '../../hooks';

type Props = {
  control: Control<any>;
  errors: FieldErrors;
};

const RegisterFieldContainer: React.FC<Props> = ({control, errors}) => {
  const {open: hidePassword, handleOpen: handleHidePassword} = useToggle(true);
  const {fieldActive, handleActiveField} = useFormField();

  return (
    <View>
      {registerMock.map((data: RegisterFieldTypes) => (
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

export default RegisterFieldContainer;
