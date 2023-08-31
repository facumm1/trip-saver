import {ValidationRule} from 'react-hook-form';

const tripRules: FieldRules = {
  passenger: {
    required: {
      value: true,
      message: 'El nombre es requerido',
    },
    minLength: {
      value: 4,
      message: 'El nombre debe ser mas largo',
    },
    pattern: {
      value: /^[A-Z][a-z]+ [A-Z][a-z]+$/,
      message: 'El nombre ingresado es inválido',
    },
  },
  amount: {
    required: {
      value: true,
      message: 'El importe es requerido',
    },
    minLength: {
      value: 3,
      message: 'El importe debe ser mas largo',
    },
    maxLength: {
      value: 6,
      message: 'El importe debe ser mas corto',
    },
  },
  number_passengers: {
    required: {
      value: true,
      message: 'Esta cantidad es requerida',
    },
    maxLength: {
      value: 1,
      message: 'La cantidad debe ser de 1 digito',
    },
    pattern: {
      value: /^[1-4]$/,
      message: 'La cantidad ingresada es inválida',
    },
  },
  from: {
    required: {
      value: true,
      message: 'La dirección es requerida',
    },
    minLength: {
      value: 5,
      message: 'Mínimo 5 carácteres',
    },
    pattern: {
      value: /^(Av\.|[A-Za-z\s]+) \d+$/,
      message: 'La dirección ingresada es inválida',
    },
  },
  to: {
    required: {
      value: true,
      message: 'La dirección es requerida',
    },
    minLength: {
      value: 5,
      message: 'Mínimo 5 carácteres',
    },
    pattern: {
      value: /^(Av\.|[A-Za-z\s]+) \d+$/,
      message: 'La dirección ingresada es inválida',
    },
  },
};

type FieldRules = {
  [fieldName: string]: {
    required?: ValidationRule<boolean>;
    minLength?: ValidationRule<number>;
    maxLength?: ValidationRule<number>;
    pattern?: ValidationRule<RegExp>;
  };
};

export default tripRules;
