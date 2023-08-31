import React from 'react';
import {StyleSheet, Text} from 'react-native';
import appColors from '../../styles/appColors';

type Props = {text: string | undefined};

const FieldName: React.FC<Props> = ({text}) => {
  return <Text style={styles.text}>{text}</Text>;
};

const styles = StyleSheet.create({
  text: {
    color: appColors.darkBlue,
    fontWeight: '500',
    marginBottom: 10,
  },
});

export default FieldName;
