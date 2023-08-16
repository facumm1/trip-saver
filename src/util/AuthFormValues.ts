import {CredentialsTypes} from '../hooks/useLoginData';

export interface AuthFormTypes {
  inputName: keyof CredentialsTypes | string;
  placeholder: string;
  inputText: string;
}

export const loginValues: AuthFormTypes[] = [
  {
    inputName: 'email',
    inputText: 'Tu correo electrónico',
    placeholder: 'robertocostas@gmail.com',
  },
  {
    inputName: 'password',
    inputText: 'Contraseña',
    placeholder: '123456',
  },
];

export interface RegisterTypes extends AuthFormTypes {
  errorMsg: string;
}

export const registerValues: RegisterTypes[] = [
  {
    inputName: 'fullName',
    inputText: 'Nombre completo',
    placeholder: 'Roberto Costas',
    errorMsg: 'El nombre debe contener mínimo 2 letras.',
  },
  {
    inputName: 'email',
    inputText: 'Tu correo electrónico',
    placeholder: 'robertocostas@gmail.com',
    errorMsg: 'El email debe ser válido.',
  },
  {
    inputName: 'password',
    inputText: 'Contraseña',
    placeholder: 'min. 6 carácteres',
    errorMsg: 'La contraseña debe tener mínimo 6 letras.',
  },
];
