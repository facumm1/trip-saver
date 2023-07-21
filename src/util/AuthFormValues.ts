import {CredentialsTypes} from '../hooks/useLoginData';

export type LoginValuesTypes = {
  inputName: keyof CredentialsTypes;
  placeholder: string;
};

export const loginValues: LoginValuesTypes[] = [
  {inputName: 'email', placeholder: 'Email'},
  {inputName: 'password', placeholder: 'Contraseña'},
];
