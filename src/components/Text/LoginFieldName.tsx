import React from 'react';
import {StyleSheet, Text} from 'react-native';
import appColors from '../../styles/appColors';

type Props = {inputText: string | undefined};

const LoginFieldName: React.FC<Props> = ({inputText}) => {
  return <Text style={styles.text}>{inputText}</Text>;
};

const styles = StyleSheet.create({
  text: {
    color: appColors.darkBlue,
    fontWeight: '500',
    marginBottom: 10,
  },
});

export default LoginFieldName;
