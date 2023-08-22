import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import appColors from '../../styles/appColors';

const ChangeFormButton: React.FC<{handleChangeForm: () => void}> = ({
  handleChangeForm,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.subtitle}>¿No tenés una cuenta?</Text>

      <TouchableOpacity onPress={handleChangeForm}>
        <Text style={styles.btnText}>Registrate ya!</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15,
  },
  subtitle: {
    fontSize: 14,
  },
  btnText: {
    color: appColors.darkBlue,
    fontWeight: '600',
    marginLeft: 5,
  },
});

export default ChangeFormButton;
