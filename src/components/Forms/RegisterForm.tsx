import React from 'react';
import {useForm} from 'react-hook-form';

import {RegisterButton} from '../Buttons';
import RegisterFieldContainer from './RegisterFieldContainer';
import {useToggle} from '../../hooks';
import AuthErrorModal from '../Error/AuthErrorModal';

export interface RegisterValueTypes {
  email: string;
  password: string;
  fullName: string;
}

const RegisterForm: React.FC = () => {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<RegisterValueTypes>({
    defaultValues: {
      email: '',
      password: '',
      fullName: '',
    },
  });

  const {open: authError, handleOpen: handleAuthError} = useToggle();

  const errorMessage = 'El usuario ingresado ya se encuentra registrado.';

  return (
    <>
      <RegisterFieldContainer control={control} errors={errors} />
      <RegisterButton
        handleSubmit={handleSubmit}
        handleAuthError={handleAuthError}
      />
      <AuthErrorModal
        errorMessage={errorMessage}
        authError={authError}
        handleAuthError={handleAuthError}
      />
    </>
  );
};

export default RegisterForm;
