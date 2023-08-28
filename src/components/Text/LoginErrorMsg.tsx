import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {FieldErrors} from 'react-hook-form';

type Props = {
  inputName: string;
  errors: FieldErrors;
};

const LoginErrorMsg: React.FC<Props> = ({inputName, errors}) => {
  //TODO fix undefined keyof problem here
  const errorMsg = errors[inputName] ? errors[inputName].message : '';

  return <Text style={styles.loginErrorMsg}>{errorMsg}</Text>;
};

const styles = StyleSheet.create({
  loginErrorMsg: {
    paddingLeft: 15,
    color: '#ff0008',
    fontSize: 13,
    marginTop: 5,
    marginBottom: 10,
  },
});

export default LoginErrorMsg;
