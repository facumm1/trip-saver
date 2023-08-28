import React from 'react';
import {useForm} from 'react-hook-form';

import {LoginButton} from '../Buttons';
import LoginFieldContainer from '../Forms/LoginFieldContainer';
import {useToggle} from '../../hooks';
import AuthErrorModal from '../Error/AuthErrorModal';

export interface LoginValueTypes {
  email: string;
  password: string;
}

const LoginForm: React.FC = () => {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<LoginValueTypes>({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const {open: authError, handleOpen: handleAuthError} = useToggle();

  //TODO this
  const errorMessage =
    'El usuario ingresado es incorrecto o no se encuentra registrado.';

  return (
    <>
      <LoginFieldContainer control={control} errors={errors} />
      <LoginButton
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

export default LoginForm;
