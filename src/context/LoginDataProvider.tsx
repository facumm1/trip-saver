import React from 'react';
import {useLoginData} from '../hooks';
import LoginDataContext from './LoginDataContext';
import {LoginHookTypes} from '../hooks/useLoginData';

const LoginDataProvider: React.FC<{children: React.ReactNode}> = ({
  children,
}) => {
  const {
    errorMessage,
    credentials,
    handleCredentials,
    handleErrorMsg,
  }: LoginHookTypes = useLoginData();

  return (
    <LoginDataContext.Provider
      value={{errorMessage, credentials, handleCredentials, handleErrorMsg}}>
      {children}
    </LoginDataContext.Provider>
  );
};

export default LoginDataProvider;
