import React from 'react';
import useRegisterData, {RegisterHookTypes} from '../hooks/useRegisterData';
import RegisterDataContext from './RegisterDataContext';

const RegisterDataProvider: React.FC<{children: React.ReactNode}> = ({
  children,
}) => {
  const {
    showErrorMsg,
    registerCred,
    handleShowError,
    handleRegisterCred,
  }: RegisterHookTypes = useRegisterData();

  return (
    <RegisterDataContext.Provider
      value={{showErrorMsg, registerCred, handleShowError, handleRegisterCred}}>
      {children}
    </RegisterDataContext.Provider>
  );
};

export default RegisterDataProvider;
