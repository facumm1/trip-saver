import React, {useContext} from 'react';
import {StyleSheet, Text} from 'react-native';
import LoginDataContext from '../../context/LoginDataContext';

const LoginErrorMsg: React.FC = () => {
  const {errorMessage} = useContext(LoginDataContext);

  return <Text style={styles.loginErrorMsg}>{errorMessage}</Text>;
};

const styles = StyleSheet.create({
  loginErrorMsg: {marginTop: 5, color: '#ff0008'},
});

export default LoginErrorMsg;
