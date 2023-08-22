import React from 'react';
import {Modal, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import appColors from '../../styles/appColors';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

type Props = {authError: boolean; handleAuthError: () => void};

const AuthErrorModal: React.FC<Props> = ({authError, handleAuthError}) => {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={authError}
      onRequestClose={handleAuthError}>
      <View style={styles.container}>
        <View style={styles.content}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <MaterialIcons
              style={styles.icon}
              color={appColors.darkBlue}
              size={35}
              name="error-outline"
            />
            <Text style={styles.text}>
              El usuario ingresado es incorrecto o no se encuentra registrado.
            </Text>
          </View>

          <TouchableOpacity onPress={handleAuthError}>
            <Text style={{color: appColors.darkBlue, fontWeight: '500'}}>
              Volver
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },
  content: {
    width: '75%',
    backgroundColor: '#f8ad9d',
    alignItems: 'center',
    borderRadius: 10,
    paddingVertical: 15,
  },
  icon: {paddingVertical: 10, paddingHorizontal: 10},
  text: {flexShrink: 1, fontSize: 14, color: appColors.darkBlue},
});

export default AuthErrorModal;
