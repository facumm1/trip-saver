import {RegisterCredentialsTypes} from '../components/Forms/RegisterContainer';

/* export const handleChangeText = (key, value, setState) => {
  setState(data => ({
    ...data,
    [key]: value,
  }));
};

export const handleFocus = (setState, registerScreen = false): void => {
  if (registerScreen) {
    setState(invalidData => invalidData && false);
    return;
  }
  setState('');
}; */

export const validateRegisterData = ({
  fullName,
  email,
  password,
  confirmPassword,
}: RegisterCredentialsTypes): boolean => {
  const fullNameValid = fullName.length > 2;
  const emailValid =
    email.length > 10 && email.includes('@') && email.includes('.com');
  const passwordValid = password.length > 5;
  const confirmPassValid = password === confirmPassword;

  if (fullNameValid && emailValid && passwordValid && confirmPassValid) {
    return true;
  }

  return false;
};

export const validateLoginData = ({
  email,
  password,
}: {
  email: string;
  password: string;
}): boolean => {
  const emailValid =
    email.length > 10 && email.includes('@') && email.includes('.com');
  const passwordValid = password.length > 5;

  if (emailValid && passwordValid) {
    return true;
  }

  return false;
};
