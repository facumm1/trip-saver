import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import RegisterForm from '../Forms/RegisterForm';
import appColors from '../../styles/appColors';
import RegisterButton from '../Buttons/RegisterButton';

export type RegisterCredentialsTypes = {
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
};

const RegisterContainer: React.FC<{handleChangeForm: () => void}> = ({
  handleChangeForm,
}) => {
  const [showErrorMsg, setShowErrorMsg] = useState<boolean>(false);
  const [registerCred, setRegisterCred] = useState<RegisterCredentialsTypes>({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleShowError = (): void => {
    setShowErrorMsg(!showErrorMsg);
  };

  const handleRegisterCred = (key: string, value: string): void => {
    setRegisterCred(data => ({
      ...data,
      [key]: value,
    }));
  };

  return (
    <>
      <View style={styles.content}>
        <View style={styles.formContainer}>
          <Text style={styles.title}>Registrarse</Text>
          <Text style={styles.subtitle}>Completa los datos para continuar</Text>

          <RegisterForm
            errorMessage={showErrorMsg}
            registerCred={registerCred}
            handleShowError={handleShowError}
            handleRegisterCred={handleRegisterCred}
          />

          <RegisterButton
            credentials={registerCred}
            handleShowError={handleShowError}
          />

          <TouchableOpacity onPress={handleChangeForm} style={styles.backBtn}>
            <Text style={styles.backBtnText}>Volver</Text>
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
  backBtnText: {textAlign: 'center'},
});

export default RegisterContainer;
