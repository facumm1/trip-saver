import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {UseFormHandleSubmit} from 'react-hook-form';

import {registerToFirebase} from '../../auth/auth';

import appColors from '../../styles/appColors';
import RightArrowIcon from '../Icons/RightArrowIcon';
import {RegisterValueTypes} from '../Forms/RegisterForm';

type Props = {
  handleSubmit: UseFormHandleSubmit<RegisterValueTypes>;
  handleAuthError: () => void;
};

const RegisterButton: React.FC<Props> = ({handleSubmit, handleAuthError}) => {
  const handleRegister = async (credentials: RegisterValueTypes) => {
    console.log(credentials);

    const authResponse = await registerToFirebase(credentials);

    if (!authResponse) {
      handleAuthError();
      return;
    }
  };

  return (
    <TouchableOpacity onPress={handleSubmit(handleRegister)} style={styles.btn}>
      <Text style={styles.text}>Registrarse</Text>
      <View style={styles.iconContainer}>
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
  iconContainer: {
    position: 'absolute',
    right: 10,
    bottom: 12,
  },
});

export default RegisterButton;
