import React, {useContext} from 'react';
import {StyleSheet, Text} from 'react-native';
import LoginDataContext from '../../context/LoginDataContext';

const LoginErrorMsg: React.FC = () => {
  const {errorMessage} = useContext(LoginDataContext);

  return <Text style={styles.loginErrorMsg}>{errorMessage}</Text>;
};

const styles = StyleSheet.create({
  loginErrorMsg: {
    alignSelf: 'center',
    color: '#ff0008',
    fontSize: 13,
    marginBottom: 10,
  },
});

export default LoginErrorMsg;
