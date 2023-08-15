import React, {useContext} from 'react';
import {View} from 'react-native';
import LoginDataContext from '../../context/LoginDataContext';
import {AuthFormTypes, loginValues} from '../../util/AuthFormValues';
import LoginFieldName from '../Text/LoginFieldName';
import HidePasswordButton from '../Buttons/HidePasswordButton';
import LoginField from '../TextField/LoginField';
import useFormField from '../../hooks/useFormField';

export type FieldActiveTypes = {
  email: boolean;
  password: boolean;
};

const LoginForm: React.FC = () => {
  const {errorMessage, handleErrorMsg, credentials, handleCredentials} =
    useContext(LoginDataContext);

  const formFieldHook = useFormField();

  //TODO cambiar key de fragment, revisar type de loginValues (genericos)

  //TODO refactor la view de login y hide
  return (
    <View>
      {loginValues.map((data: AuthFormTypes, index) => (
        <View key={index} style={{marginBottom: 20}}>
          <LoginFieldName inputText={data.inputText} />
          <View>
            {/* Text field */}
            <LoginField
              inputName={data.inputName}
              placeholder={data.placeholder}
              credentials={credentials}
              handleCredentials={handleCredentials}
              {...formFieldHook}
            />

            {/* Boton */}
            <HidePasswordButton
              inputName={data.inputName}
              handleHidePassword={formFieldHook.handleHidePassword}
            />
          </View>
        </View>
      ))}
    </View>
  );
};

export default LoginForm;
