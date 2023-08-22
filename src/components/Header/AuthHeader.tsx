import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {AppLogo} from '../Logos';
import appColors from '../../styles/appColors';

const AuthHeader: React.FC<{showRegister: boolean}> = ({showRegister}) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <AppLogo logoSize={20} />
        <Text style={styles.headerText}>Trip Saver</Text>
      </View>

      <Text style={styles.currentForm}>
        {!showRegister ? 'Iniciar sesión' : 'Registrarse'}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {marginBottom: 35},
  header: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 50,
    marginBottom: 20,
  },
  headerText: {
    color: appColors.darkBlue,
    fontWeight: '500',
    fontSize: 20,
    marginLeft: 10,
  },
  currentForm: {
    color: appColors.darkBlue,
    fontWeight: '400',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default AuthHeader;
