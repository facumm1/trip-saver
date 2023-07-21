import {useState} from 'react';

export type RegisterCredentialsTypes = {
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export type RegisterHookTypes = {
  registerCred: RegisterCredentialsTypes;
  showErrorMsg: boolean;
  handleRegisterCred: (
    key: keyof RegisterCredentialsTypes,
    value: string,
  ) => void;
  handleShowError: () => void;
};

const useRegisterData = (): RegisterHookTypes => {
  const [registerCred, setRegisterCred] = useState<RegisterCredentialsTypes>({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [showErrorMsg, setShowErrorMsg] = useState<boolean>(false);

  const handleShowError = (): void => {
    setShowErrorMsg(!showErrorMsg);
  };

  const handleRegisterCred = (key: string, value: string): void => {
    setRegisterCred(data => ({
      ...data,
      [key]: value,
    }));
  };

  return {showErrorMsg, registerCred, handleShowError, handleRegisterCred};
};

export default useRegisterData;
