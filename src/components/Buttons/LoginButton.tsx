import React, {useContext} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {validateLoginData} from '../../helpers/loginHandlers';
import LoginDataContext from '../../context/LoginDataContext';
import {userLogging} from '../../firebase/auth/auth';
import appColors from '../../styles/appColors';
import RightArrowIcon from '../Icons/RightArrowIcon';

const LoginButton: React.FC = () => {
  //TODO terminar refactor de este componente
  const {credentials, handleErrorMsg} = useContext(LoginDataContext);

  const handleLogin = async () => {
    if (!validateLoginData(credentials)) {
      handleErrorMsg('Email o contraseña inválidos o incorrectos.');
      return;
    }

    const {email, password} = credentials;

    console.log('Se logro iniciar sesion con', email, password);

    await userLogging(credentials);
  };

  //TODO fixear position absolute
  return (
    <TouchableOpacity onPress={handleLogin} style={styles.btn}>
      <Text style={styles.text}>Iniciar sesión</Text>
      <View style={{position: 'absolute', right: 10, bottom: 12}}>
        <RightArrowIcon iconSize={17.5} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btn: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
    backgroundColor: appColors.green,
    marginTop: 12,
    borderRadius: 50,
    paddingVertical: 12.5,
  },
  text: {
    fontWeight: '500',
    fontSize: 14,
    color: appColors.darkBlue,
    textAlign: 'center',
  },
});

export default LoginButton;
