import {createContext} from 'react';
import {LoginHookTypes} from '../hooks/useLoginData';

export type CredentialsTypes = {
  email: string;
  password: string;
};

const defaultLoginData: LoginHookTypes = {
  errorMessage: '',
  credentials: {email: '', password: ''},
  handleCredentials: () => {},
  handleErrorMsg: () => {},
};

const LoginDataContext = createContext<LoginHookTypes>(defaultLoginData);

export default LoginDataContext;
