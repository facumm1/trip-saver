import React from 'react';
import {ChangeFormButton, LoginButton} from '../Buttons';
import LoginFieldContainer from '../Forms/LoginFieldContainer';
import {useForm} from 'react-hook-form';

type Props = {
  handleChangeForm: () => void;
};
export interface LoginValueTypes {
  email: string;
  password: string;
}

const LoginForm: React.FC<Props> = ({handleChangeForm}) => {
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

  return (
    <>
      <LoginFieldContainer control={control} errors={errors} />

      <ChangeFormButton handleChangeForm={handleChangeForm} />

      <LoginButton handleSubmit={handleSubmit} />
    </>
  );
};

export default LoginForm;
