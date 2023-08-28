export const loginMock: AuthFieldTypes[] = [
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

export const registerMock: RegisterFieldTypes[] = [
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

export interface AuthFieldTypes {
  inputName: string;
  placeholder: string;
  inputText: string;
}

export interface RegisterFieldTypes extends AuthFieldTypes {
  errorMsg: string;
}
