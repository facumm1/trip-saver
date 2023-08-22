import React from 'react';
import {LoginButton} from '../Buttons';
import LoginFieldContainer from '../Forms/LoginFieldContainer';
import {useForm} from 'react-hook-form';
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

  return (
    <>
      <LoginFieldContainer control={control} errors={errors} />
      <LoginButton
        handleSubmit={handleSubmit}
        handleAuthError={handleAuthError}
      />
      <AuthErrorModal authError={authError} handleAuthError={handleAuthError} />
    </>
  );
};

export default LoginForm;
