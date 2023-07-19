import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import AuthButton from '../Buttons/AuthButton';
import RegisterForm from '../Inputs/RegisterForm';
import appColors from '../../styles/appColors';

export type RegisterCredentialsTypes = {
  fullName?: string;
  email: string;
  password: string;
  confirmPassword?: string;
};

const RegisterContainer: React.FC<{handleChangeForm: () => void}> = ({
  handleChangeForm,
}) => {
  const [errorMessage, setErrorMessage] = useState<boolean>(false);
  const [registerCred, setRegisterCred] = useState<RegisterCredentialsTypes>({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  return (
    <>
      <View style={styles.content}>
        <View style={styles.formContainer}>
          <Text style={styles.title}>Registrarse</Text>
          <Text style={styles.subtitle}>Completa los datos para continuar</Text>

          <RegisterForm
            errorMessage={errorMessage}
            registerCred={registerCred}
            setErrorMessage={setErrorMessage}
            setRegisterCred={setRegisterCred}
          />

          <AuthButton
            setErrorMessage={setErrorMessage}
            credentials={registerCred}
            registerBtn
          />

          <TouchableOpacity onPress={handleChangeForm} style={styles.backBtn}>
            <Text style={{textAlign: 'center'}}>Volver</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  content: {
    alignItems: 'center',
    backgroundColor: appColors.white,
  },
  formContainer: {
    width: '75%',
    marginTop: 30,
  },
  title: {
    fontSize: 22.5,
  },
  subtitle: {
    fontSize: 17,
    marginVertical: 2.5,
    marginBottom: 10,
  },
  backBtn: {
    marginTop: 10,
    alignSelf: 'center',
    paddingVertical: 2.5,
    paddingHorizontal: 15,
  },
});

export default RegisterContainer;
