import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import appColors from '../../styles/appColors';

const GetStartedButton: React.FC = () => {
  return (
    <TouchableOpacity style={styles.btn}>
      <Text style={styles.text}>Comenzar ahora</Text>
      <MaterialIcons
        name="keyboard-arrow-right"
        size={17.5}
        color={appColors.darkBlue}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btn: {
    alignItems: 'flex-end',
    borderRadius: 50,
    justifyContent: 'center',
    backgroundColor: appColors.green,
    flexDirection: 'row',
    paddingVertical: 10,
    paddingHorizontal: 0,
    width: '50%',
  },
  text: {
    color: appColors.darkBlue,
    fontSize: 15,
    fontWeight: '500',
  },
});

export default GetStartedButton;
