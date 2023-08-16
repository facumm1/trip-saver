import React from 'react';
import LoginDataProvider from '../../context/LoginDataProvider';
import {ChangeFormButton, LoginButton} from '../Buttons';
import LoginFieldContainer from '../Forms/LoginFieldContainer';

type Props = {
  handleChangeForm: () => void;
};

const LoginForm: React.FC<Props> = ({handleChangeForm}) => {
  return (
    <LoginDataProvider>
      <LoginFieldContainer />

      <ChangeFormButton handleChangeForm={handleChangeForm} />

      <LoginButton />
    </LoginDataProvider>
  );
};

export default LoginForm;
