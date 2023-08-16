import React from 'react';
import RegisterDataProvider from '../../context/RegisterDataProvider';
import RegisterFieldContainer from './RegisterFieldContainer';
import {RegisterButton} from '../Buttons';

const RegisterForm: React.FC = () => {
  return (
    <RegisterDataProvider>
      <RegisterFieldContainer />

      <RegisterButton />
    </RegisterDataProvider>
  );
};

export default RegisterForm;
