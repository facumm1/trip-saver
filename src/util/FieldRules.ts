export const emailRules = {
  required: {
    value: true,
    message: 'El email es requerido',
  },
  minLength: {
    value: 6,
    message: 'El email debe ser mas largo',
  },
  pattern: {
    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    message: 'El email ingresado es inválido',
  },
};

export const passwordRules = {
  required: {
    value: true,
    message: 'La contraseña es requerida',
  },
  minLength: {
    value: 6,
    message: 'La contraseña debe ser mas larga',
  },
  pattern: {value: /^[a-zA-Z0-9]+$/, message: 'Contraseña inválida'},
};

export const fullNameRules = {
  required: {
    value: true,
    message: 'La contraseña es requerida',
  },
  minLength: {
    value: 6,
    message: 'La contraseña debe ser mas larga',
  },
  pattern: {
    value: /^[A-Za-zÁ-ÿ-]+(?:\s+[A-Za-zÁ-ÿ-]+)+$/,
    message: 'Nombre inválido',
  },
};
