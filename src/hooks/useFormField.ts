import {useState} from 'react';

type FieldActiveTypes = {
  email: boolean;
  password: boolean;
  fullName: boolean;
};

export type UseFormFieldTypes = {
  fieldActive: FieldActiveTypes;
  handleActiveField: (inputName: string) => void;
};

const useFormField = (): UseFormFieldTypes => {
  const [fieldActive, setFieldActive] = useState<FieldActiveTypes>({
    email: false,
    password: false,
    fullName: false,
  });

  const handleActiveField = (inputName: string): void => {
    setFieldActive(prevFieldActive => ({
      ...prevFieldActive,
      [inputName]: !prevFieldActive[inputName as keyof FieldActiveTypes],
    }));
  };

  return {
    fieldActive,
    handleActiveField,
  };
};

export default useFormField;
