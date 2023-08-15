import {useState} from 'react';

type FieldActiveTypes = {
  email: boolean;
  password: boolean;
};

export type UseFormFieldTypes = {
  hidePassword: boolean;
  fieldActive: FieldActiveTypes;
  handleHidePassword: () => void;
  handleActiveField: (inputName: string) => void;
};

const useFormField = (): UseFormFieldTypes => {
  const [hidePassword, setHidePassword] = useState<boolean>(true);
  const [fieldActive, setFieldActive] = useState<FieldActiveTypes>({
    email: false,
    password: false,
  });

  const handleHidePassword = (): void => {
    setHidePassword(!hidePassword);
  };

  const handleActiveField = (inputName: string): void => {
    setFieldActive(prevFieldActive => ({
      ...prevFieldActive,
      [inputName]: !prevFieldActive[inputName as keyof FieldActiveTypes],
    }));
  };

  return {
    hidePassword,
    handleHidePassword,
    fieldActive,
    handleActiveField,
  };
};

export default useFormField;
