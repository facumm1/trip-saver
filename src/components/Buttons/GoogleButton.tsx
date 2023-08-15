import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import appColors from '../../styles/appColors';

const GoogleButton: React.FC = () => {
  return (
    <TouchableOpacity style={styles.btn}>
      <FontAwesome name="google" size={20} color={'red'} />
      <Text style={styles.textBtn}>Iniciar sesión con Google</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btn: {
    flexDirection: 'row',
    borderRadius: 30,
    borderWidth: 1,
    borderColor: appColors.gray,
    marginTop: 7.5,
    paddingVertical: 10,
    justifyContent: 'center',
  },
  textBtn: {
    color: appColors.darkBlue,
    fontSize: 14,
    fontWeight: '400',
    marginLeft: 10,
    textAlign: 'center',
  },
});

export default GoogleButton;
