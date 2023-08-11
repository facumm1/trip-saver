import React, {useContext} from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import buttonStyles from '../../styles/buttonStyle';

import {validateRegisterData} from '../../helpers/loginHandlers';
import RegisterDataContext from '../../context/RegisterDataContext';
import {registerNewUser} from '../../firebase/auth/auth';

const RegisterButton: React.FC = () => {
  const {registerCred: credentials, handleShowError} =
    useContext(RegisterDataContext);

  const handleRegister = async () => {
    if (!validateRegisterData(credentials)) {
      handleShowError();
      return;
    }

    await registerNewUser(credentials);
  };

  return (
    <TouchableOpacity
      onPress={handleRegister}
      style={[buttonStyles.btn, styles.loginButton]}>
      <Text style={[buttonStyles.textBtn, styles.loginButtonText]}>
        Registrarse
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  loginButton: {
    backgroundColor: '#000',
    marginTop: 12,
    width: '75%',
  },
  loginButtonText: {
    color: '#fff',
  },
});

export default RegisterButton;
