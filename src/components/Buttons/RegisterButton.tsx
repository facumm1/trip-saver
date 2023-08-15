import React, {useContext} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import {validateRegisterData} from '../../helpers/loginHandlers';
import RegisterDataContext from '../../context/RegisterDataContext';
//import {registerNewUser} from '../../firebase/auth/auth';
import appColors from '../../styles/appColors';
import RightArrowIcon from '../Icons/RightArrowIcon';

const RegisterButton: React.FC = () => {
  const {registerCred: credentials, handleShowError} =
    useContext(RegisterDataContext);

  const handleRegister = async () => {
    if (!validateRegisterData(credentials)) {
      handleShowError();
      return;
    }

    console.log('registered!');

    //await registerNewUser(credentials);
  };

  return (
    <TouchableOpacity onPress={handleRegister} style={styles.btn}>
      <Text style={styles.text}>Registrarse</Text>
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

export default RegisterButton;
