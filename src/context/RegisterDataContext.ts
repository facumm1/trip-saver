import {createContext} from 'react';
import {RegisterHookTypes} from '../hooks/useRegisterData';

const initialData: RegisterHookTypes = {
  showErrorMsg: false,
  registerCred: {fullName: '', email: '', password: '', confirmPassword: ''},
  handleRegisterCred: () => {},
  handleShowError: () => {},
};

const RegisterDataContext = createContext<RegisterHookTypes>(initialData);

export default RegisterDataContext;
