import React from 'react';
import {View} from 'react-native';
import {useToggle} from '../hooks';
import AuthHeader from '../components/Header/AuthHeader';
import AuthFormLayout from '../layout/AuthFormLayout';

const AuthView: React.FC = () => {
  const {open: showRegister, handleOpen: handleChangeForm} = useToggle();

  return (
    <View>
      <AuthHeader showRegister={showRegister} />
      <AuthFormLayout
        showRegister={showRegister}
        handleChangeForm={handleChangeForm}
      />
    </View>
  );
};

export default AuthView;
