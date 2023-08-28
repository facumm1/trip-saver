import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {UseFormHandleSubmit} from 'react-hook-form';
import {NavigationProp, useNavigation} from '@react-navigation/native';

import {loginToFirebase} from '../../auth/auth';

import appColors from '../../styles/appColors';
import RightArrowIcon from '../Icons/RightArrowIcon';
import {LoginValueTypes} from '../Forms/LoginForm';

type Props = {
  handleSubmit: UseFormHandleSubmit<LoginValueTypes>;
  handleAuthError: () => void;
};

const LoginButton: React.FC<Props> = ({handleSubmit, handleAuthError}) => {
  const navigation: NavigationProp<any, 'MainScreen'> = useNavigation();

  const handleLogin = async (credentials: LoginValueTypes) => {
    const authResponse = await loginToFirebase(credentials);

    if (!authResponse) {
      handleAuthError();
      return;
    }

    //console.log(authResponse);

    //const uuid = user?.uid;

    /* await AsyncStorage.setItem('fullName', user?.displayName || '');
    await AsyncStorage.setItem('id', uuid || ''); */

    navigation.navigate('MainScreen');
  };

  //TODO fixear position absolute
  return (
    <TouchableOpacity onPress={handleSubmit(handleLogin)} style={styles.btn}>
      <Text style={styles.text}>Iniciar sesión</Text>
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

export default LoginButton;
