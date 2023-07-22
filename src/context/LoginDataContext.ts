import {createContext} from 'react';
import {LoginHookTypes} from '../hooks/useLoginData';

const initialData: LoginHookTypes = {
  errorMessage: '',
  credentials: {email: '', password: ''},
  handleCredentials: () => {},
  handleErrorMsg: () => {},
};

const LoginDataContext = createContext<LoginHookTypes>(initialData);

export default LoginDataContext;
