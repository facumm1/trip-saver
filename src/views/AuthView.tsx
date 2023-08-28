import React from 'react';
import {useToggle} from '../hooks';
import AuthHeader from '../components/Header/AuthHeader';
import AuthFormLayout from '../layout/AuthFormLayout';

const AuthView: React.FC = () => {
  const {open: showRegister, handleOpen: handleChangeForm} = useToggle();

  return (
    <>
      <AuthHeader showRegister={showRegister} />
      <AuthFormLayout
        showRegister={showRegister}
        handleChangeForm={handleChangeForm}
      />
    </>
  );
};

export default AuthView;
