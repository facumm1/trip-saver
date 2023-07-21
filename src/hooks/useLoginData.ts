import {useState} from 'react';

export type CredentialsTypes = {
  email: string;
  password: string;
};

export type LoginHookTypes = {
  credentials: CredentialsTypes;
  errorMessage: string;
  handleCredentials: (key: keyof CredentialsTypes, value: string) => void;
  handleErrorMsg: (msg: string) => void;
};

const useLoginData = (): LoginHookTypes => {
  const [credentials, setCredentials] = useState<CredentialsTypes>({
    email: '',
    password: '',
  });
  const [errorMessage, setErrorMessage] = useState<string>('');

  const handleErrorMsg = (msg: string): void => {
    setErrorMessage(msg);
  };

  const handleCredentials = (key: string, value: string): void => {
    setCredentials(data => ({
      ...data,
      [key]: value,
    }));
  };

  return {credentials, errorMessage, handleCredentials, handleErrorMsg};
};

export default useLoginData;
