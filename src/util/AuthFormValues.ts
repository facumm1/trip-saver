import {CredentialsTypes} from '../hooks/useLoginData';

export interface AuthFormTypes {
  inputName: keyof CredentialsTypes | string;
  placeholder: string;
  errorMsg?: string;
}

export const loginValues: AuthFormTypes[] = [
  {inputName: 'email', placeholder: 'Email'},
  {inputName: 'password', placeholder: 'Contraseña'},
];

export const registerValues: AuthFormTypes[] = [
  {
    inputName: 'fullName',
    placeholder: 'Nombre completo',
    errorMsg: 'El nombre debe contener mínimo 2 letras.',
  },
  {
    inputName: 'email',
    placeholder: 'Email',
    errorMsg: 'El email debe tener al menos una arroba.',
  },
  {
    inputName: 'password',
    placeholder: 'Contraseña',
    errorMsg: 'La contraseña debe tener mínimo 6 letras.',
  },
  {
    inputName: 'confirmPassword',
    placeholder: 'Confirmar contraseña',
    errorMsg: 'Las contraseñas deben coincidir.',
  },
];
