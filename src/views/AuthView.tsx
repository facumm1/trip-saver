import React from 'react';
import {useToggle} from '../hooks';
import AuthHeader from '../components/Header/AuthHeader';
import AuthFormLayout from '../layout/AuthFormLayout';
import FadeAnimWrapper from '../wrapper/HOC/FadeAnimWrapper';

const AuthView: React.FC = () => {
  const {open: showRegister, handleOpen: handleChangeForm} = useToggle();

  return (
    <FadeAnimWrapper>
      <AuthHeader showRegister={showRegister} />
      <AuthFormLayout
        showRegister={showRegister}
        handleChangeForm={handleChangeForm}
      />
    </FadeAnimWrapper>
  );
};

export default AuthView;
